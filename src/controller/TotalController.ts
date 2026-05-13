import Database from "../database/Database";
import Client from "../models/Client";
import Room from "../models/Room";
import { RoomType } from "../enum/RoomType";
import Reservation from "../models/Reservation";
import Menu from "../view/Menu";

export default class TotalController {

    //ajeitar para que o banco seja definido e usado pelo
    //controller ou secretaria do sistema

    private database: Database;
    private menu = new Menu(this);

    constructor() {
        this.database = new Database();
        this.menu.initialScreen();
    }

    //metodo para criar cliente via controller dando new
    //e salvando no banco via push

    public createNewClient(name: string, cpf: string): void {
        const client = new Client(name, cpf);

        this.database.client.push(client);

        console.log("Cliente criado com sucesso");
    }

    //agora o metodo para listar os clientes
    public listClients(): void {
        console.log(this.database.client);
    }
    //SOBRECARGA
//a sobrecarga permite usar o mesmo metodo
//de formas diferentes

//nesse caso createNewRoom pode:
//receber apenas numero e tipo
//ou numero, tipo e dias

//isso deixa o metodo mais flexivel
//sem precisar criar varios metodos diferentes

public createNewRoom(
    number: number,
    type: RoomType
): void;

public createNewRoom(
    number: number,
    type: RoomType,
    days: number
): void;

public createNewRoom(
    number: number,
    type: RoomType,
    days?: number
): void {

    const room = new Room(
        number,
        type,
        days ?? 1
    );

    this.database.room.push(room);

    console.log("quarto cadastrado!");
}

   //AQUI ESTA A INJECAO DE DEPENDENCIA DE RESERVA PELO
//CONTROLLER
public createNewReservation(
    client: Client,
    room: Room
): void {

    const reservation = new Reservation(client, room);

    console.log("Reserva criada!");

    reservation.showData();

    }
}