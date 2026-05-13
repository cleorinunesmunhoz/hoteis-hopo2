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
    //metodo para mostrar dados, aqui a classe pai herda para a classe filha client,
    //e na classe filha fica mais adaptado
    public showData(): void {
        console.log("Nome: " + this.getName);
    }
}