import {
    Entity, 
    PrimaryGenerateColumn, 
    JoinColumn, 
    OnetoOne, 
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class Pix {
}