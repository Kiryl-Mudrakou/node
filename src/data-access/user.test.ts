import { findOne} from "./user";


jest.mock('./user').

describe("User Service", () => {
  it("it should create a user", async () => {
    const createUserMock = await findOne();

    expect(createUserMock).toHaveBeenCalled();
  });
  // it("it should find a user by id", async () => {
  //   let result = await UserService.getUser();
  //   expect(result).toHaveBeenCalled();
  // });
  // it("it should mark as deleted by id", async () => {
  //   let result = await userService.deleteUser(data.id);
  //   expect(result.isdeleted).toBeTruthy();
  // });
  // it("it should find all the matched terms", async () => {
  //   let result = await userService.searchUser(5,'shiva');
  //   expect(result).toEqual([data]);
  // });
});