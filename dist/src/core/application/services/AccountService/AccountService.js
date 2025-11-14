"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
class AccountService {
    constructor(repository) {
        this.repository = repository;
    }
    async listAccounts() {
        return await this.repository.findAll();
    }
    async createAccount(account) {
        await this.repository.insert(account);
    }
    async depositInAccount(accountNumber, depositAmount) {
        const account = await this.repository.findByAccountNumber(accountNumber);
        if (!account) {
            return false;
        }
        account.deposit(depositAmount);
        await this.repository.update(account);
    }
    async withDraw(accountNumber, depositAmount) {
        const account = await this.repository.findByAccountNumber(accountNumber);
        if (!account) {
            return false;
        }
        account.withdraw(depositAmount);
        await this.repository.update(account);
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=AccountService.js.map