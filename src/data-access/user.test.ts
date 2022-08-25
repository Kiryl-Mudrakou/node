import { findOne, create, remove, update, findAll, getAll, findByLogin} from "./user";

const user = {login: 'st', age: 19, id: 1, isDeleted: false, password:'124asd '};
jest.mock('../models/user.model', () => ({
    User: {
      findOne: jest.fn().mockReturnValue(Promise.resolve({login: 'st', age: 19, id: 1, isDeleted: false, password:'124asd '})),
      create: jest.fn().mockReturnValue(Promise.resolve({login: 'st', age: 19, id: 1, isDeleted: false, password:'124asd '})),
      update: jest.fn().mockReturnValue(Promise.resolve([{login: 'st', age: 19, id: 1, isDeleted: true, password:'124asd '}, {login: 'st', age: 25, id: 1, isDeleted: false, password:'124asd '}])),
      findAll: jest.fn().mockReturnValue(Promise.resolve([{login: 'some', age: 19, id: 1, isDeleted: true, password:'124asd '}, {login: 'some', age: 25, id: 1, isDeleted: false, password:'124asd '}])),
    }
}))

afterEach(() => {
  jest.clearAllMocks();
});

describe("User", () => {

  it("it should find user", async () => {
    const result = await findOne(1);

    expect(result).toEqual(user);
  });

  it("it should create user", async () => {
    const result = await create(user);

    expect(result).toEqual(user);
  });


  it("it should remove user", async () => {
    const result = await remove(1);

    expect(result).toEqual({login: 'st', age: 19, id: 1, isDeleted: true, password:'124asd '});
  });

  it("it should update user", async () => {
    const result = await update(1, {login: 'st', age: 25, id: 1, isDeleted: false, password:'124asd '} );

    expect(result).toEqual({login: 'st', age: 25, id: 1, isDeleted: false, password:'124asd '});
  });

  it("it should findAll users", async () => {
    const result = await findAll('some', 1);

    expect(result).toEqual([{login: 'some', age: 19, id: 1, isDeleted: true, password:'124asd '}, {login: 'some', age: 25, id: 1, isDeleted: false, password:'124asd '}]);
  });

  it("it should getAll users", async () => {
    const result = await getAll();

    expect(result).toEqual([{login: 'some', age: 19, id: 1, isDeleted: true, password:'124asd '}, {login: 'some', age: 25, id: 1, isDeleted: false, password:'124asd '}]);
  });

  it("it should findByLogin user", async () => {
    const result = await findByLogin('st');

    expect(result).toEqual({"age": 19, "id": 1, "isDeleted": false, "login": "st", "password": "124asd "});
  });
});
