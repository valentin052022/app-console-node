"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFileUseCase = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class SaveFileUseCase {
    constructor() {
        /**
         * repository where add file
         */
    }
    saveFile({ fileContent, fileDestination = "outputs", fileName = "table", }) {
        try {
            (0, fs_1.mkdirSync)(fileDestination, { recursive: true });
            (0, fs_1.writeFileSync)(path_1.default.join(__dirname, `../../../${fileDestination}/${fileName}.txt`), fileContent, "utf-8");
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.SaveFileUseCase = SaveFileUseCase;
