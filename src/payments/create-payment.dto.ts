import { IsUUID, IsInt, IsNumber, Min, Max } from 'class-validator';

export class CreatePaymentDto {
    @IsUUID()
    talentId: string;

    @IsInt()
    @Min(1)
    @Max(12)
    month: number;

    @IsInt()
    @Min(2000)
    year: number;

    @IsNumber()
    amount: number;
}
