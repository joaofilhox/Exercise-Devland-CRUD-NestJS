import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>,
    ) { }

    async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const exists = await this.paymentRepository.findOne({
            where: {
                talentId: createPaymentDto.talentId,
                month: createPaymentDto.month,
                year: createPaymentDto.year,
            },
        });

        if (exists) {
            throw new ConflictException('Já existe pagamento para este mês/ano');
        }

        const payment = this.paymentRepository.create(createPaymentDto);
        return await this.paymentRepository.save(payment);
    }

    async findAll(): Promise<Payment[]> {
        return await this.paymentRepository.find({ relations: ['talent'] });
    }

    async findOne(id: string): Promise<Payment> {
        const payment = await this.paymentRepository.findOne({
            where: { id },
            relations: ['talent'],
        });
        if (!payment) {
            throw new NotFoundException('Payment não encontrado');
        }
        return payment;
    }

    async remove(id: string): Promise<void> {
        const payment = await this.findOne(id);
        await this.paymentRepository.remove(payment);
    }
}
