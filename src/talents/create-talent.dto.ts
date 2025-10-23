import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TalentStatus } from './talent-status.enum';

export class CreateTalentDto {
    @ApiProperty({ description: 'Nome do talent', example: 'Empresa X' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'CNPJ único do talent', example: '12.345.678/0001-90' })
    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty({ description: 'Status do talent', enum: TalentStatus, example: TalentStatus.ACTIVE })
    @IsEnum(TalentStatus)
    status: TalentStatus;
}
