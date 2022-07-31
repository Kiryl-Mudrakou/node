import { create, findOne, remove, update, findAll, getAll} from '../data-access/user'

export class UserService {

  createUser(payload: any) {
    return create(payload);
  }

  getUser(id: number) {
    return findOne(id);
  }

  deleteUser(id: number) {
    return remove(id);
  }

  updateUser(id: number, payload: any) {
    return update(id, payload);
  }

  searchUser(login: string, limit: any) {
    return findAll(login, limit);
  }

  getAll() {
    return getAll();
  }
}
