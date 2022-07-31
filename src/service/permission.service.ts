import {createPermission, getPermissions} from '../data-access/permission';

export class PermissionService {
  addUserToGroup(UserId: number, GroupId: number) {
    return createPermission(UserId, GroupId);
  }

  getPermissions() {
    return getPermissions();
  }
}