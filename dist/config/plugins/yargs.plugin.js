"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yargPlugin = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yargPlugin = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplication table base",
})
    .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "limit the multiplication",
})
    .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show Multiplication table",
})
    .options("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File Name"
})
    .options("d", {
    alias: "destination",
    type: "string",
    default: "output",
    describe: "Destination the file created"
})
    .check((argv, options) => {
    if (argv.b <= 0) {
        throw new Error("ERROR: The value must be greater than 0");
    }
    return true;
})
    .parseSync();
