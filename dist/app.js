"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_plugin_1 = require("./config/plugins/yargs.plugin");
const serverApp_1 = require("./presentation/serverApp");
(() => __awaiter(void 0, void 0, void 0, function* () {
    main();
}))();
function main() {
    const { b: base, l: limit, s: showTable, d: destination, n: nameFile } = yargs_plugin_1.yargPlugin;
    serverApp_1.ServerApp.run({ base, limit, showTable, destination, nameFile });
}
