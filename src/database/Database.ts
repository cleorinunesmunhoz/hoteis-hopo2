import Person from "../models/Person";
import Client from "../models/Client";
import Room from "../models/Room";
import Reservation from "../models/Reservation";

export default class Database {

    public client: Client[] = [];

    public person: Person[] = [];

    public room: Room[] = [];

    public reservation: Reservation[] = [];

    
}