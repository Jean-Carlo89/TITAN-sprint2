"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const entity_1 = require("../../shared/entity");
class Account extends entity_1.Entity {
    constructor(props) {
        super(props.accountNumber);
        this.balance = props.balance;
        this.accountNumber = props.accountNumber;
        this.client = props.client;
    }
    static create(props) {
        const account = new Account(props);
        return account;
    }
    deposit(value) {
        if (value > 0) {
            this.balance = this.balance + value;
        }
    }
    withdraw(value) {
        if (value > 0 && this.balance > value) {
            this.balance = this.balance - value;
        }
    }
}
exports.Account = Account;
//# sourceMappingURL=Accounts.js.map