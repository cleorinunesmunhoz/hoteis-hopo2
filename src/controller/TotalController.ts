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

        console.log("Cliente criado com sucesso");
    }

    //agora o metodo para listar os clientes
    public listClients(): void {
        console.log(this.database.client);
    }

    public createNewRoom(
        number: number,
        type: RoomType,
        days: number
    ): void {
    
        const room = new Room(number, type, days);
    
        this.database.room.push(room);
    
        console.log("quarto cadastrado!");
    }
    //agora metodo para listar os quartos
    public listRooms(): void {
        console.log(this.database.room);
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