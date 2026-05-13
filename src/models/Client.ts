import { IEntity } from "./IEntity";
import Person from "./Person";

export default class Client extends Person implements IEntity {

    private cpf: string;

    constructor(name: string, cpf: string) {
        super(name);
        this.cpf = cpf;
    }
    id: number = 5;
    getNumber1(): number {
        return this.id;
    }

    public get getCpf(): string {
        return this.cpf;
    }

    public set setCpf(newCpf: string) {
        this.cpf = newCpf;
    }
    
    //aqui implementei a sobrescrita que  é implementar o mesmo método da classe pai na classe filha usando override
    //A sobrescrita permite:
    //manter o mesmo nome do método
    //mas adaptar o comportamento para a classe filha.
    //quando chamada essa classe ela vai mostar tanto nome quando cpf,
    //lembrando que o nome e herdado de person, mas no metodo antigo nao mostrava
    public override showData(): void {

        console.log("Nome: " + this.getName);
    
        console.log("CPF: " + this.getCpf);
    }
}