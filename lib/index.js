"use strict";

const chalk = require("chalk");
const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32"
      ? "\x1B[2J\x1B[0f"
      : "\x1B[2J\x1B[3J\x1B[H"
  );
};
clearConsole();
console.log(chalk.hex("#6f00f")("     ʚɞ ═══════════════ ⚚ ═══════════════ ʚɞ"));
console.log(chalk.hex("#6f00f")(`
░█▀▄░█▀█░▀▀█░▀█▀░█▀█░█▀█░▀█▀░█▀▀░█▀█░█░█░█▀█░█▀▄
░█░█░█▀█░▄▀░░░█░░█░█░█░█░░█░░█▀▀░█░█░█░█░█░█░█░█
░▀▀░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░▀░░▀░░░▀▀▀░▀▀▀░▀░▀░▀▀░
`));
console.log(chalk.hex("#6f00f")("      ∘₊✧─────────────────────────────✧₊∘      \n"));
console.log(chalk.hex("#6f00f")("       Baileys modified by: DaziNotFound"));
console.log(chalk.hex("#6f00f")("Follow @TenkaWaBails And @7eppeli For More Updates\n"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
