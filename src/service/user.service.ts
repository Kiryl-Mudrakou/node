import { create, findOne, remove, update, findAll, getAll} from '../data-access/user'

export class UserService {

  public createUser(payload: any) {
    return create(payload);
  }

  public getUser(id: number) {
    return findOne(id);
  }

  public deleteUser(id: number) {
    return remove(id);
  }

  public updateUser(id: number, payload: any) {
    return update(id, payload);
  }

  public searchUser(login: string, limit: any) {
    return findAll(login, limit);
  }

  public getAll() {
    return getAll();
  }
}
