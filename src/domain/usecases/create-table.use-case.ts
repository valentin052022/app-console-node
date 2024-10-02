export interface CreateTableUseCase {
    create: (optionTable: TableOptions) => string;
}

export interface TableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {


    constructor(){
        /** 
         * DI: Injection Dependency
        */
    }


   create(optionTable: TableOptions) {
    let outputMessage: string = "";
    const title: string = `
==========================
TABLA: ${optionTable.base}
==========================
`;

    for (let i = 1; i <= optionTable.limit; i++) {
      outputMessage += `${optionTable.base} x ${i} = ${optionTable.base * i}\n`;
    }

    const finalOutputMessage = title + outputMessage;
    return finalOutputMessage
  }
}
