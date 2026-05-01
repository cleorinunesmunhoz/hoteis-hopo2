import Pessoa from "./models/Pessoa";
import Cliente from "./models/Cliente";
import Quarto from "./models/Quarto";
import { TipoQuarto } from "./enum/TipoQuarto";
import Banco from "./database/Banco";
import ControleTotal from "./controller/ControleTotal";
import Reserva from "./models/Reserva";

////aqui eu crio a variavel e inicializo com new
//const pessoa1= new Pessoa("Cleori");
////aqui eu peco pra mostrar na tela
//console.log(pessoa1.getNome);
////aqui eu altero o nome pelo set
//pessoa1.setNome ="heliton";
//console.log(pessoa1.getNome);

////testar a heranca
const cliente1 = new Cliente("analice", "12345");
//Cliente1.mostrarDados();

////testar  modelo quarto
const quarto1 = new Quarto (1, TipoQuarto.LUXO, 5);
////chamar o metodo
//quarto1.mostrarDados();

////testando o banco
////primeiro cria o banco e novo cliente
//const banco = new Banco();
//const Cliente1 = new Cliente("amadeu", "97809");
////guardando no banco
//banco.cliente.push(Cliente1);
//console.log(banco.cliente);

////testando o controler, ainda banco  cliente e listar cliente
//const secretaria = new ControleTotal();
//secretaria.criarClienteTeste();
//secretaria.listarClientes();

////testando os quartos os metodos do controler
//secretaria.criarQuartoTeste();
//secretaria.listarQuartos();

//AQUI NA RESERVA ESTA A INJECAO DE DEPENDENCIA, 
//quando eu dou new, mas aqui entendi mais, porque 
//tanto cliente quanto reserva ja estao prontos, 
//so fiz a juncao e dei new.
const reserva1 = new Reserva(cliente1, quarto1);

reserva1.mostrarDados();
