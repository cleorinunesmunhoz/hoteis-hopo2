import Database from "../database/Database";
import Client from "../models/Client";
import Room from "../models/Room";
import { RoomType } from "../enum/RoomType";
import Reservation from "../models/Reservation";

export default class TotalController {

    //ajeitar para que o banco seja definido e usado pelo
    //controller ou secretaria do sistema

    private database: Database;

    constructor() {
        this.database = new Database();
    }

    //metodo para criar cliente via controller dando new
    //e salvando no banco via push

    public createNewClient(name: string, cpf: string): void {
        const client = new Client(name, cpf);

        this.database.client.push(client);

        console.log("Client created");
    }

    //agora o metodo para listar os clientes
    public listClients(): void {
        console.log(this.database.client);
    }

    //agora o metodo para criar os quartos e dar new e
    //salvando via push lembrando que tem enum
    public createRoomTest(): void {
        const room = new Room(101, RoomType.LUXO, 3);

        this.database.room.push(room);

        console.log("Room created!");
    }

    //agora metodo para listar os quartos
    public listRooms(): void {
        console.log(this.database.room);
    }

    //AQUI ESTA A INJECAO DE DEPENDENCIA DE RESERVA PELO
    //CONTROLLER
    public createReservationTest(): void {
        const client = new Client("Miryan", "10298769");

        const room = new Room(101, RoomType.SOLTEIRO, 5);

        const reservation = new Reservation(client, room);

        console.log("Reservation created!");

        reservation.showData();
    }
}