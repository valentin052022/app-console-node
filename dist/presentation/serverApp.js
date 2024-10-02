"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/usecases/create-table.use-case");
const save_file_use_case_1 = require("../domain/usecases/save-file-use-case");
class ServerApp {
    static run({ base, limit, showTable, nameFile, destination }) {
        console.log("Server Runnig...");
        const table = new create_table_use_case_1.CreateTable().create({ base, limit });
        const wasCreated = new save_file_use_case_1.SaveFileUseCase().saveFile({
            fileContent: table,
            fileName: `${nameFile}-${base}`,
            fileDestination: destination
        });
        if (showTable)
            console.log(table);
        if (wasCreated)
            console.log("file Createed");
    }
}
exports.ServerApp = ServerApp;
