"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountInMemoryRepository = void 0;
const in_memory_repo_1 = require("../../shared/infra/in-memory.repo");
class AccountInMemoryRepository extends in_memory_repo_1.InMemoryRepository {
    async findByAccountNumber(accountNumber) {
        const item = this.items.find((item) => item.accountNumber === accountNumber);
        return typeof item === "undefined" ? null : item;
    }
}
exports.AccountInMemoryRepository = AccountInMemoryRepository;
//# sourceMappingURL=Accounts.in-memory.repo.js.map