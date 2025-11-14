"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNewAccount = handleNewAccount;
const Accounts_1 = require("@core/domain/entities/Accounts");
const Client_1 = require("@core/domain/entities/Client");
const app_1 = require("./app");
const ClientService_1 = require("@core/application/services/ClientService/ClientService");
const AccountService_1 = require("@core/application/services/AccountService/AccountService");
const repo_instance_1 = require("@core/shared/repo.instance");
async function handleNewAccount() {
    const name = await app_1.menuInterface.question("Digite seu nome: ");
    const randomId = Math.floor(1000 + Math.random() * 9000);
    try {
        const repo = (0, repo_instance_1.getClientRepo)();
        const service = new ClientService_1.ClientService(repo);
        const clientProps = {
            name: name,
            id: randomId,
            accounts: [],
        };
        const client = Client_1.Client.create(clientProps);
        const accountProps = {
            client: client,
            accountNumber: Math.floor(1000 + Math.random() * 9000),
            balance: 0,
        };
        const account = Accounts_1.Account.create(accountProps);
        client.accounts.push(account);
        await service.createClient(client);
        const accountRepo = (0, repo_instance_1.getAccountRepo)();
        const accountService = new AccountService_1.AccountService(accountRepo);
        await accountService.createAccount(account);
        await console.log("\n✅ Cadastro concluído com sucesso!");
    }
    catch (error) {
        console.log("\n✅ Houve um erro na craicao da conta :(");
        return;
    }
    return;
}
//# sourceMappingURL=clientRoute.js.map