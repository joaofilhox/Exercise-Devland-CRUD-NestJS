import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TalentStatus } from './talent-status.enum';
import { Payment } from '../payments/payment.entity';

@Entity('talents')
export class Talent {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    cnpj: string;

    @Column({ type: 'enum', enum: TalentStatus, default: TalentStatus.ACTIVE })
    status: TalentStatus;

    @OneToMany(() => Payment, payment => payment.talent)
    payments: Payment[];
}
