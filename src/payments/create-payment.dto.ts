import { IsUUID, IsInt, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
    @ApiProperty({ description: 'ID do talent (UUID)', example: '123e4567-e89b-12d3-a456-426614174000' })
    @IsUUID()
    talentId: string;

    @ApiProperty({ description: 'Mês do pagamento', example: 10, minimum: 1, maximum: 12 })
    @IsInt()
    @Min(1)
    @Max(12)
    month: number;

    @ApiProperty({ description: 'Ano do pagamento', example: 2024, minimum: 2000 })
    @IsInt()
    @Min(2000)
    year: number;

    @ApiProperty({ description: 'Valor do pagamento', example: 5000.00 })
    @IsNumber()
    amount: number;
}
