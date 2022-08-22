export interface IUser{
  id?: number;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export enum Permission{
  'READ',
  'WRITE',
  'DELETE',
  'SHARE',
  'UPLOAD_FILES'
}

export interface  IGroup{
  id: number,
  name: string,
  permissions: Permission
}

export interface IPermission{
  userId: number,
  groupId: number
}


