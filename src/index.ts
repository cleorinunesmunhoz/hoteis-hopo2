import Pessoa from "./models/Pessoa";
import Cliente from "./models/Cliente";
import Quarto from "./models/Quarto";
import { TipoQuarto } from "./enum/TipoQuarto";
import Banco from "./database/Banco";

////aqui eu crio a variavel e inicializo com new
//const pessoa1= new Pessoa("Cleori");
////aqui eu peco pra mostrar na tela
//console.log(pessoa1.getNome);
////aqui eu altero o nome pelo set
//pessoa1.setNome ="heliton";
//console.log(pessoa1.getNome);

////testar a heranca
//const Cliente1 = new Cliente("analice", "12345");
//Cliente1.mostrarDados();

////testar  modelo quarto
//const quarto1 = new Quarto (1, TipoQuarto.LUXO, 5);
////chamar o metodo
//quarto1.mostrarDados();

//testando o banco
//primeiro cria o banco e novo cliente
const banco = new Banco();
const Cliente1 = new Cliente("amadeu", "97809");
//guardando no banco
banco.Cliente.push(Cliente1);
console.log(banco.Cliente);

