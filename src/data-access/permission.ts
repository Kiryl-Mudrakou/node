import { Permission } from "../models/permission.model";

export const createPermission = async (userId: number, groupId: number) => {
  return Permission.create({ userId, groupId }, { returning: true });
};

export const getPermissions = async () => {
  return await Permission.findAll();
};