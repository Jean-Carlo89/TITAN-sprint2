"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuInterface = void 0;
const readline = require("readline/promises");
require("module-alias/register");
const process_1 = require("process");
const AccountsRouter_1 = require("./AccountsRouter");
const clientRoute_1 = require("./clientRoute");
exports.menuInterface = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
async function handleMenu() {
    let menuIsRunning = true;
    while (menuIsRunning) {
        console.log("\n--- Gerenciador de Contas da TITAN  v.Mero Trainee ---");
        console.log("1. Criar Conta");
        console.log("2. Consultar Conta");
        console.log("S. Sair do programa");
        const maninMenuAnswer = await exports.menuInterface.question('Digite o número ou "S" para sair: ');
        try {
            switch (maninMenuAnswer.toUpperCase()) {
                case "1":
                    await (0, clientRoute_1.handleNewAccount)();
                    break;
                case "2":
                    await (0, AccountsRouter_1.handleListAccounts)();
                    break;
                case "S":
                    console.log("\n Saindo do programa.");
                    menuIsRunning = false;
                    break;
                default:
                    console.log("\n Opção inválida. Tente novamente.\n");
            }
        }
        catch (error) {
            console.error("\n Ocorreu um erro durante a execução da opção:");
            if (error instanceof Error) {
                console.error(`Mensagem de Erro: ${error.message}`);
            }
            else {
                console.error("Mensagem: Erro desconhecido.");
            }
        }
    }
    exports.menuInterface.close();
}
handleMenu();
//# sourceMappingURL=app.js.map