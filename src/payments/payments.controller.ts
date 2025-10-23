import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './create-payment.dto';
import { Payment } from './payment.entity';
import {
    ApiTags,
    ApiOperation,
    ApiCreatedResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiConflictResponse,
    ApiParam,
} from '@nestjs/swagger';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new payment' })
    @ApiCreatedResponse({ description: 'Payment created successfully', type: Payment })
    @ApiConflictResponse({ description: 'Já existe pagamento para este mês/ano' })
    @ApiBadRequestResponse({ description: 'Validation failed' })
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }

    @Get()
    @ApiOperation({ summary: 'List all payments' })
    @ApiResponse({ status: 200, description: 'List of payments with talent data', type: [Payment] })
    findAll() {
        return this.paymentsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a payment by id' })
    @ApiParam({ name: 'id', description: 'Payment id (uuid)' })
    @ApiResponse({ status: 200, description: 'Payment found with talent data', type: Payment })
    @ApiNotFoundResponse({ description: 'Payment não encontrado' })
    findOne(@Param('id') id: string) {
        return this.paymentsService.findOne(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove a payment by id' })
    @ApiParam({ name: 'id', description: 'Payment id (uuid)' })
    @ApiResponse({ status: 200, description: 'Payment removed' })
    @ApiNotFoundResponse({ description: 'Payment não encontrado' })
    remove(@Param('id') id: string) {
        return this.paymentsService.remove(id);
    }
}
