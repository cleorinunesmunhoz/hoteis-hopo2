import Banco from "../database/Banco";
import Cliente from "../models/Cliente";
import Quarto from "../models/Quarto";
import { TipoQuarto } from "../enum/TipoQuarto";

export default class ControleTotal {
    //ajeitar para que o banco seja definido e usado pelo 
    //  controller ou secretaria do sistema

    private banco : Banco;
    
    constructor() {
        this.banco = new Banco();
    }
    
    //metodo para criar cliente via controler dando new 
    // e salvando no banco via push
    public criarClienteTeste() {
        const cliente = new Cliente("mariana", "1029");
        this.banco.cliente.push(cliente);
        console.log("Cliente cadastrado criado");
    }

    // agora o metodo  para listar os clientes
    public listarClientes()  {
        console.log(this.banco.cliente);
    }

    //agora o metodo para criar osquartos e dar new e 
    //salvando via push lembrando que tem enum
    public criarQuartoTeste(): void {
        const quarto = new Quarto(101, TipoQuarto.LUXO, 3);
    
        this.banco.quarto.push(quarto);
    
        console.log("Quarto criado!");
    }

    //agora metodo para listar os quartos 
    public listarQuartos(): void {
        console.log(this.banco.quarto);
    }
    
}