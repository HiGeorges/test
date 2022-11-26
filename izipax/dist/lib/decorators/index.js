"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLESACCESS = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'role';
const ROLESACCESS = (...role) => (0, common_1.SetMetadata)(exports.ROLES_KEY, role);
exports.ROLESACCESS = ROLESACCESS;
//# sourceMappingURL=index.js.map