import yargs, { boolean, number, string } from "yargs";
import { hideBin } from "yargs/helpers";

export const yargPlugin = yargs(hideBin(process.argv))
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
