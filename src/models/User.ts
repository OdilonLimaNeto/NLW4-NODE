import { Column, CreateDateColumn, Entity, PrimaryColumn, } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users') //definindo classe como entidade.
class User {
    
    @PrimaryColumn() //definindo como chave primaria.
    readonly id: string;

    @Column() // definindo como coluna
    name: string;

    @Column() // definindo como coluna
    email: string;

    @CreateDateColumn() // definindo como DataColunm
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();

            //verificando para criação de uuid.
        }
    }
}

export { User };