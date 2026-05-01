import Cliente from "./Cliente";
import Quarto from "./Quarto";

export default class Reserva {
    
    private cliente: Cliente;
    private quarto: Quarto;
    
    //AQUI E UMA INJECAO DE DEPENDENCIA, VIA CONSTRUTOR, AQUI ELE RECEBE, MASINJETA VIA NEW
    constructor(cliente:Cliente, quarto:Quarto) {
        this.cliente = cliente;
        this.quarto = quarto;
    }
    mostrarDados(): void {
        console.log("------ RESERVA ------");
        console.log(`Cliente: ${this.cliente.getNome}`);
        console.log(`Quarto: ${this.quarto.getNumber}`);
        console.log(`Tipo: ${this.quarto.getTipo}`);
        console.log(`Dias: ${this.quarto.getDias}`);
    }
}