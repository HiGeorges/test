import { Roles } from './../types/index';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'role';
export const ROLESACCESS = (...role: Roles[]) => SetMetadata(ROLES_KEY, role);
