"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotEnvOptions = void 0;
const path = require("path");
const env = process.env.NODE_ENV || 'development';
const p = path.join(process.cwd(), `env/${env}.env`);
console.log(`Loading environment from ${p}`);
const dotEnvOptions = {
    path: p,
};
exports.dotEnvOptions = dotEnvOptions;
//# sourceMappingURL=dotenv.config.js.map