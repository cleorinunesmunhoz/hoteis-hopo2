import Pessoa from "./Pessoa";

export default class Cliente extends Pessoa {

     private Cpf : string;

     constructor(nome: string,Cpf: string) {
        super(nome);
        this.Cpf = Cpf;
     }
     public get getCpf(): string {
        return this.Cpf;
     }
     public set setCpf(novoCpf: string) {
         this.Cpf = novoCpf;
     }
     public mostrarDados(): void {
        console.log("nome: "+ this.getNome + "\nCpf " + this.getCpf);
     }
}