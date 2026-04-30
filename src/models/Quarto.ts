import { TipoQuarto } from "../enum/TipoQuarto";
export default class Quarto {

    private numero:number;
    private tipo :TipoQuarto;
    private dias :number;

constructor(numero:number, tipo: TipoQuarto, dias:number) {
    this.numero = numero;
    this.tipo = tipo;
    this.dias = dias;
} 
public get getNumber(): number {
    return this.numero;
}
public get getTipo(): string {
    return this.tipo;
}
public get getDias(): number {
    return this.dias;
}
public set setDias(novoDias: number) {
    this.dias = novoDias;
}

public mostrarDados(): void {
    console.log("quarto"  +  this.numero);
    console.log("Tipo" +  this.tipo);
    console.log("dias" +  this.dias);
}
}
