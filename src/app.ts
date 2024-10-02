import { yargPlugin } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/serverApp";


(async () => {
  main();
})();

function main() {
  const { b: base, l: limit, s: showTable, d: destination, n: nameFile } = yargPlugin;
  ServerApp.run({ base, limit, showTable, destination, nameFile });
}
