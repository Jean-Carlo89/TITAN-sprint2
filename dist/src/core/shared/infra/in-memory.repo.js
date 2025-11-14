"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
class InMemoryRepository {
    constructor() {
        this.items = [];
    }
    async update(entity) {
        const indexFound = this.items.findIndex((item) => item === entity);
        if (indexFound === -1) {
            throw new Error("Ocorreu um erro durante a atualizacao da conta");
        }
        this.items[indexFound] = entity;
    }
    async insert(entity) {
        console.log(this.items);
        await this.items.push(entity);
        console.log(this.items);
    }
    async findById(Id) {
        const item = this.items.find((item) => item.id === Id);
        return typeof item === "undefined" ? null : item;
    }
    async findAll() {
        return this.items;
    }
}
exports.InMemoryRepository = InMemoryRepository;
//# sourceMappingURL=in-memory.repo.js.map