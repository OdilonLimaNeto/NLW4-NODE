import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("surveys_users")
class SurveyUser {

    @PrimaryColumn() //definindo como chave primaria.
    readonly id: string;

    @Column() // definindo como coluna
    user_id: string;

    @Column() // definindo como coluna
    survey_id: string;

    @Column()
    value: number;
    
    @CreateDateColumn() // definindo como DataColunm
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();

            //verificando para criação de uuid.
        }
    }
}
export { SurveyUser };