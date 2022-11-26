import { Roles } from './../types/index';
export declare const ROLES_KEY = "role";
export declare const ROLESACCESS: (...role: Roles[]) => import("@nestjs/common").CustomDecorator<string>;
