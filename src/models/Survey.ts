import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

class Survey {
    @PrimaryColumn() //definindo como chave primaria.
    readonly id: string;

    @Column() // definindo como coluna
    title: string;

    @Column() // definindo como coluna
    description: string;

    @CreateDateColumn() // definindo como DataColunm
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();

            //verificando para criação de uuid.
        }
    }
}
export { Survey };