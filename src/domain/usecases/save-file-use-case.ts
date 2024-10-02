import { mkdirSync, writeFileSync } from "fs";
import path from "path";

export interface SaveFileUseCase {
  save: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFileUseCase implements SaveFileUseCase {
  constructor() {
    /**
     * repository where add file
     */
  }

  saveFile({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: SaveFileOptions): boolean {
    try {
      mkdirSync(fileDestination, { recursive: true });

      writeFileSync(
        path.join(__dirname, `../../../${fileDestination}/${fileName}.txt`),
        fileContent,
        "utf-8"
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
