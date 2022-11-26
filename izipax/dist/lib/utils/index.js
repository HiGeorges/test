"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = void 0;
const generateOtp = () => (Math.floor(Math.random() * 9000000) + 1000000).toString();
exports.generateOtp = generateOtp;
//# sourceMappingURL=index.js.map