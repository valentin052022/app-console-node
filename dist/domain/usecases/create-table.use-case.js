"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() {
        /**
         * DI: Injection Dependency
        */
    }
    create(optionTable) {
        let outputMessage = "";
        const title = `
==========================
TABLA: ${optionTable.base}
==========================
`;
        for (let i = 1; i <= optionTable.limit; i++) {
            outputMessage += `${optionTable.base} x ${i} = ${optionTable.base * i}\n`;
        }
        const finalOutputMessage = title + outputMessage;
        return finalOutputMessage;
    }
}
exports.CreateTable = CreateTable;
