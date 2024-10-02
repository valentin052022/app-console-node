"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const yargs_plugin_1 = require("./config/plugins/yargs.plugin");
const createTable = (base, limit, show) => {
    let outputMessage = "";
    const title = `
==========================
TABLA: ${base}
==========================
`;
    for (let i = 1; i <= limit; i++) {
        outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    if (show) {
        console.log("file created¡");
        console.log(title + outputMessage);
        (0, fs_1.writeFileSync)(path_1.default.join(__dirname, `./output/table-${base}.txt`), title + outputMessage, "utf-8");
    }
    else {
        console.log("Show for message and save file, add flag -s in your script");
    }
};
const { b, l, s } = yargs_plugin_1.yargPlugin;
createTable(b, l, s);
