"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientRepo = getClientRepo;
exports.getAccountRepo = getAccountRepo;
const Accounts_in_memory_repo_1 = require("@core/infra/databases/Accounts.in-memory.repo");
const Client_in_memory_repo_1 = require("@core/infra/databases/Client.in-memory.repo");
const clientRepo = new Client_in_memory_repo_1.ClientInMemoryRepository();
const accountRepo = new Accounts_in_memory_repo_1.AccountInMemoryRepository();
function getClientRepo() {
    return clientRepo;
}
function getAccountRepo() {
    return accountRepo;
}
//# sourceMappingURL=repo.instance.js.map