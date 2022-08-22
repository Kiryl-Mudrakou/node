import { getAll, getById, createOne, updateOne, deleteOne,} from "./group";

jest.mock('./group', () => ({
  getById: jest.fn(),
  createOne: jest.fn(),
  updateOne: jest.fn(),
  deleteOne: jest.fn(),
  getAll: jest.fn(),
}))
const group = {id: 1, name: 'some group', permissions: 1}

describe("Group", () => {

  it("it should find group by id", async () => {
    await getById(1);

    expect(getById).toHaveBeenCalledWith(1);
  });

  it("it should create group ", async () => {
    await createOne(group);

    expect(createOne).toHaveBeenCalledWith(group);
  });

  it("it should update group", async () => {
    await updateOne(1, group);

    expect(updateOne).toHaveBeenCalledWith(1, group);
  });

  it("it should delete group", async () => {
    await deleteOne(1 );

    expect(deleteOne).toHaveBeenCalledWith(1);
  });


  it("it should getAll groups", async () => {
    await getAll();

    expect(getAll).toHaveBeenCalledTimes(1);
  });

});
