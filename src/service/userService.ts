export class UserService {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  createUser(payload: any) {
    return this.model.create(payload);
  }

  getUser(id: string) {
    return this.model.findOne(id);
  }

  deleteUser(id: string) {
    return this.model.remove(id);
  }

  updateUser(id: string, payload: any) {
    return this.model.update(id, payload);
  }

  searchUser(login: string, limit: any) {
    return this.model.findAll(login, limit);
  }

  getAll() {
    return this.model.getAll();
  }
}
