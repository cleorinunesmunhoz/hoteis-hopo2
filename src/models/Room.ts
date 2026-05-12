import { RoomType } from "../enum/RoomType";
import { IEntity } from "./IEntity";

export default class Room implements IEntity{

    private number: number;
    private type: RoomType;
    private days: number;

    constructor(number: number, type: RoomType, days: number) {
        this.number = number;
        this.type = type;
        this.days = days;
    }
    id: number;
    getNumber1(): number {
        return 0;
    }

    public get getNumber(): number {
        return this.number;
    }

    public get getType(): string {
        return this.type;
    }

    public get getDays(): number {
        return this.days;
    }

    public set setDays(newDays: number) {
        this.days = newDays;
    }

    public showData(): void {

        console.log("Quarto: " + this.number);

        console.log("Tipo: " + this.type);

        console.log("Dias: " + this.days);
    }
}