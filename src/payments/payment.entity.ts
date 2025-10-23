import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Talent } from '../talents/talent.entity';

@Entity('payments')
@Index(['talentId', 'month', 'year'], { unique: true })
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'talent_id' })
    talentId: string;

    @ManyToOne(() => Talent, talent => talent.payments)
    @JoinColumn({ name: 'talent_id' })
    talent: Talent;

    @Column()
    month: number;

    @Column()
    year: number;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;
}
