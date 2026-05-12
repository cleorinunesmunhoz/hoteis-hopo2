import Person from "./models/Person";
import Client from "./models/Client";
import Room from "./models/Room";
import { RoomType } from "./enum/RoomType";
import Database from "./database/Database";
import TotalController from "./controller/TotalController";
import Reservation from "./models/Reservation";

////aqui eu crio a variavel e inicializo com new
//const person1 = new Person("Cleori");

////aqui eu peco pra mostrar na tela
//console.log(person1.getName);

////aqui eu altero o nome pelo set
//person1.setName = "heliton";

//console.log(person1.getName);

////testar a heranca
const client1 = new Client("analice", "12345");

//client1.showData();

////testar modelo quarto
const room1 = new Room(1, RoomType.LUXO, 5);

////chamar o metodo
//room1.showData();

////testando o banco
////primeiro cria o banco e novo cliente
//const database = new Database();

//const client2 = new Client("amadeu", "97809");

////guardando no banco
//database.client.push(client2);

//console.log(database.client);

////testando o controller, ainda banco cliente e listar cliente
//const secretary = new TotalController();

//secretary.createNewClient("Mariana", "1029");

//secretary.listClients();

////testando os quartos os metodos do controller
//secretary.createRoomTest();

//secretary.listRooms();

//AQUI NA RESERVA ESTA A INJECAO DE DEPENDENCIA,
//quando eu dou new, mas aqui entendi mais, porque
//tanto cliente quanto reserva ja estao prontos,
//so fiz a juncao e dei new.
const reservation1 = new Reservation(client1, room1);

reservation1.showData();