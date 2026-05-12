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

    public showData(): void {
        console.log("Name: " + this.getName + "\nCPF " + this.getCpf);
    }
}