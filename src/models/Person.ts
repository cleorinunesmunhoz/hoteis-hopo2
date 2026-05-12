export default class Person {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public get getName(): string {
        return this.name;
    }

    public set setName(newName: string) {
        this.name = newName;
    }
}