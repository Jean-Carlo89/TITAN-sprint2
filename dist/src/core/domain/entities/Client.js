"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const entity_1 = require("../../shared/entity");
class Client extends entity_1.Entity {
    constructor(props) {
        super(props.id);
        this.email = props.email ?? "";
        this.name = props.name;
        this.accounts = props.accounts;
    }
    static create(props) {
        const client = new Client(props);
        return client;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map