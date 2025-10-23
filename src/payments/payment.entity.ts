import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Talent } from '../talents/talent.entity';

@Entity('payments')
@Index(['talentId', 'month', 'year'], { unique: true })
export class Payment {
    @ApiProperty({ description: 'ID único do pagamento', example: '123e4567-e89b-12d3-a456-426614174000' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ description: 'ID do talent', example: '123e4567-e89b-12d3-a456-426614174000' })
    @Column({ name: 'talent_id' })
    talentId: string;

    @ApiProperty({ description: 'Dados do talent', type: () => Talent })
    @ManyToOne(() => Talent, talent => talent.payments)
    @JoinColumn({ name: 'talent_id' })
    talent: Talent;

    @ApiProperty({ description: 'Mês do pagamento', example: 10, minimum: 1, maximum: 12 })
    @Column()
    month: number;

    @ApiProperty({ description: 'Ano do pagamento', example: 2024 })
    @Column()
    year: number;

    @ApiProperty({ description: 'Valor do pagamento', example: 5000.00 })
    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;
}
