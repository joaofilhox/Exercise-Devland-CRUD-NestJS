import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talent } from './talent.entity';
import { CreateTalentDto } from './create-talent.dto';

@Injectable()
export class TalentsService {
    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>,
    ) { }

    async create(createTalentDto: CreateTalentDto): Promise<Talent> {
        const exists = await this.talentRepository.findOne({
            where: { cnpj: createTalentDto.cnpj },
        });

        if (exists) {
            throw new ConflictException('CNPJ já cadastrado');
        }

        const talent = this.talentRepository.create(createTalentDto);
        return await this.talentRepository.save(talent);
    }

    async findAll(): Promise<Talent[]> {
        return await this.talentRepository.find();
    }

    async findOne(id: string): Promise<Talent> {
        const talent = await this.talentRepository.findOne({ where: { id } });
        if (!talent) {
            throw new NotFoundException('Talent não encontrado');
        }
        return talent;
    }

    async remove(id: string): Promise<void> {
        const talent = await this.findOne(id);
        await this.talentRepository.remove(talent);
    }
}
