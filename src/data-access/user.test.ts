import { findOne, create, remove, update, findAll, getAll, findByLogin} from "./user";

jest.mock('./user', () => ({
  findOne: jest.fn(),
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findAll: jest.fn(),
  getAll: jest.fn(),
  findByLogin: jest.fn(),
}))
const user = {login: 'st', age: 19, id: 1, isDeleted: false, password:'124asd '};

describe("User", () => {

  it("it should find user", async () => {
    await findOne(1);

    expect(findOne).toHaveBeenCalledWith(1);
  });

  it("it should create user", async () => {
    await create(user);

    expect(create).toHaveBeenCalledWith(user);
  });

  it("it should remove user", async () => {
    await remove(1);

    expect(remove).toHaveBeenCalledWith(1);
  });

  it("it should update user", async () => {
    await update(1, user );

    expect(update).toHaveBeenCalledWith(1, user);
  });

  it("it should findAll users", async () => {
    await findAll('some', 1);

    expect(findAll).toHaveBeenCalledWith('some', 1);
  });

  it("it should getAll users", async () => {
    await getAll();

    expect(getAll).toHaveBeenCalledTimes(1);
  });

  it("it should findByLogin user", async () => {
    await findByLogin('name');

    expect(findByLogin).toHaveBeenCalledWith('name');
  });
});
