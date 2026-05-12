import Person from "./Person";

export default class Client extends Person {

    private cpf: string;

    constructor(name: string, cpf: string) {
        super(name);
        this.cpf = cpf;
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