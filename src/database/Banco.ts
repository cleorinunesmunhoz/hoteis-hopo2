import Pessoa from "../models/Pessoa";
import Cliente from "../models/Cliente";
import Quarto from "../models/Quarto";

export default class Banco {

    public cliente: Cliente[] =[];
    public pessoa: Pessoa[] =[];
    public quarto: Quarto [] = [];
}