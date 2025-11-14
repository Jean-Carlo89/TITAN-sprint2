"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
class ClientService {
    constructor(repository) {
        this.repository = repository;
    }
    async createClient(input) {
        await this.repository.insert(input);
    }
    async listClients() {
        return await this.repository.findAll();
    }
}
exports.ClientService = ClientService;
//# sourceMappingURL=ClientService.js.map