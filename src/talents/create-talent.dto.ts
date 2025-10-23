import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { TalentStatus } from './talent-status.enum';

export class CreateTalentDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @IsEnum(TalentStatus)
    status: TalentStatus;
}
