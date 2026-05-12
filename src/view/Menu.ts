const prompt = require("prompt-sync")();

import TotalController from "../controller/TotalController";
import { RoomType } from "../enum/RoomType";

import Client from "../models/Client";
import Room from "../models/Room";

export default class Menu {

    private controller;

    constructor(controller: TotalController){
      this.controller = controller;
    }

    public initialScreen() {

        let option: number = 0;

        while (option !== 5) {

            console.log("\n====== HOTEL DA CLEO ======");

            console.log("1 - Cadastrar Cliente");

            console.log("2 - Criar Quarto");

            console.log("3 - Criar Reserva");

            console.log("4 - Listar Tudo");

            console.log("5 - Sair");

            option = Number(prompt("Escolha uma opcao: "));

            switch (option) {

                case 1:

                    const name = prompt("Digite o nome: ");

                    const cpf = prompt("Digite o cpf: ");

                    this.controller.createNewClient(name, cpf);

                    break;

                case 2:

                    const number = Number(
                        prompt("Digite o numero do quarto: ")
                    );

                    const type = prompt(
                        "Digite o tipo (SOLTEIRO, CASAL, LUXO): "
                    );

                    const days = Number(
                        prompt("Digite a quantidade de dias: ")
                    );

                    this.controller.createNewRoom(
                        number,
                        RoomType[type as keyof typeof RoomType],
                        days
                    );

                    break;

                case 3:

                    const clientName = prompt(
                        "Digite o nome do cliente: "
                    );

                    const clientCpf = prompt(
                        "Digite o CPF do cliente: "
                    );

                    const roomNumber = Number(
                        prompt("Digite o numero do quarto: ")
                    );

                    const roomType = prompt(
                        "Digite o tipo do quarto (SOLTEIRO, CASAL, LUXO): "
                    );

                    const roomDays = Number(
                        prompt("Digite os dias da reserva: ")
                    );

                    const client = new Client(
                        clientName,
                        clientCpf
                    );

                    const room = new Room(
                        roomNumber,
                        RoomType[roomType as keyof typeof RoomType],
                        roomDays
                    );

                    this.controller.createNewReservation(
                        client,
                        room
                    );

                    break;

                case 4:

                    this.controller.listClients();

                    this.controller.listRooms();

                    break;

                case 5:

                    console.log("Sistema encerrado");

                    break;

                default:

                    console.log("Opcao invalida");
            }
        }
    }
}