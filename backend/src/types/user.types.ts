// User types
export interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roleId: string;
  department?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roleId: string;
  password: string;
  department?: string;
}

export interface UpdateUserDTO {
  email?: string;
  firstName?: string;
  lastName?: string;
  roleId?: string;
  department?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
}

// Role types
export interface IRole {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  createdAt: Date;
}

export enum UserRole {
  ENTERPRISE = 'ENTERPRISE',
  MISSION_CONTROL = 'MISSION_CONTROLE',
  DIRECTION_TECH = 'DIRECTION_TECH',
  DMC = 'DMC',
  DAF = 'DAF',
  DIRECTION_GENERAL = 'DIRECTION_GÉNÉRALE',
  ADMIN = 'ADMIN',
}
