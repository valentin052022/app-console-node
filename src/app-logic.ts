import { writeFileSync } from "fs";
import path from "path";
import { yargPlugin } from "./config/plugins/yargs.plugin";



const createTable = (base:number, limit:number, show:boolean)=> {
    let outputMessage:string = ""
    const title:string = `
==========================
TABLA: ${base}
==========================
`

    for(let i = 1; i <= limit; i++){
        outputMessage += `${base} x ${i} = ${base * i}\n`
    }


    if(show){
        console.log("file created¡");
        console.log(title + outputMessage);
        writeFileSync(path.join(__dirname, `./output/table-${base}.txt`),title + outputMessage, "utf-8");
    } else {
        console.log("Show for message and save file, add flag -s in your script");
    }
}


const {b, l, s} = yargPlugin;

createTable(b,l,s);