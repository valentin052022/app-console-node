import { CreateTable } from "../domain/usecases/create-table.use-case";
import { SaveFileUseCase } from "../domain/usecases/save-file-use-case";

export interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    destination?: string,
    nameFile: string
}


export class ServerApp{
    static run({base, limit, showTable, nameFile, destination}: RunOptions){
        console.log("Server Runnig...");

        const table = new CreateTable().create({base, limit})
        const wasCreated = new SaveFileUseCase().saveFile({
            fileContent: table,
            fileName: `${nameFile}-${base}`,
            fileDestination: destination
        });
        if(showTable) console.log(table);
        if(wasCreated) console.log("file Createed");

    }
}