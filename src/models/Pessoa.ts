export default class Pessoa {

    private nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    public get getNome(): string {
        return this.nome;
    }

    public set setNome(novoNome:string) {
        this.nome=novoNome
    }
}