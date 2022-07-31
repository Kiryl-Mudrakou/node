import { IGroup } from '../interfeces/IUsers';
import { updateOne, getAll, getById, deleteOne, createOne } from '../data-access/group';

export class GroupService {
  getAll() {
    return getAll();
  }

 getGroupById(id: number) {
     return  getById(id);
  }

  deleteGroup(id: number) {
     return  deleteOne(id);
  }

  createGroup(group: IGroup) {
    return createOne(group);
  }

  updateGroup(id: number, group: IGroup) {
    return  updateOne(id, group);
  }
}