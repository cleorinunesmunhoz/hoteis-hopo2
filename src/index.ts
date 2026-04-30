import Pessoa from "./models/Pessoa";

//aqui eu crio a variavel e inicializo com new
const pessoa1= new Pessoa("Cleori");
//aqui eu peco pra mostrar na tela
console.log(pessoa1.getNome);
//aqui eu altero o nome pelo set
pessoa1.setNome ="heliton";
console.log(pessoa1.getNome);