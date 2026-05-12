import Client from "./Client";
import Room from "./Room";

export default class Reservation {

    private client: Client;

    private room: Room;

    //AQUI E UMA INJECAO DE DEPENDENCIA, VIA CONSTRUTOR, AQUI ELE RECEBE, MAS INJETA VIA NEW
    constructor(client: Client, room: Room) {

        this.client = client;

        this.room = room;
    }

    public showData(): void {

        console.log("------ RESERVA ------");

        console.log(`Cliente: ${this.client.getName}`);

        console.log(`Quarto: ${this.room.getNumber}`);

        console.log(`Tipo: ${this.room.getType}`);

        console.log(`Dias: ${this.room.getDays}`);
    }
}