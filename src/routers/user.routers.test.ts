import {UserService} from "../service/user.service";
const request = require("supertest");
import * as express from "express";
import {userRouter} from "./user.routers";
import {User} from "../models/user.model";
const bodyParser = require('body-parser');

jest.mock('sequelize');

const userServiceGetUserMock = jest
  .spyOn(UserService.prototype, 'getUser')
  .mockReturnValue(Promise.resolve({login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '} as User));
const userServiceCreateMock = jest
  .spyOn(UserService.prototype, 'createUser')
  .mockReturnValue(Promise.resolve({login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '} as User));
const userServiceUpdateMock = jest
  .spyOn(UserService.prototype, 'updateUser')
  .mockReturnValue(Promise.resolve([{login: 'st', age: 19, id: 4, isDeleted: false, password: '124asd '}]as User[]));
const userServiceDeleteMock = jest
  .spyOn(UserService.prototype, 'deleteUser')
  .mockReturnValue(Promise.resolve(1));
const userServiceSearchMock = jest
  .spyOn(UserService.prototype, 'searchUser')
  .mockReturnValue(Promise.resolve([
    {login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '},
    {login: 'sta', age: 29, id: 2, isDeleted: false, password: '124asda22 '}
  ] as User[]));


describe("User router", () => {

  const app = express();
  app.use(express.urlencoded({extended: false}));
  app.use('/user', userRouter);
  app.use(bodyParser.json());

  it("it should get user", async () => {
    const user = new UserService();
    const res = await request(app).get('/user/1')
    const result = await user.getUser(1)

    expect(res.status).toEqual(200);
    expect(result).toEqual({"age": 19, "id": 1, "isDeleted": false, "login": "st", "password": "124asd "});
    expect(userServiceGetUserMock).toHaveBeenCalled();
  });

  it("it should not get user", async () => {
    const userServiceUpdateMock = jest
      .spyOn(UserService.prototype, 'getUser')
      .mockReturnValue(Promise.reject('getUser error').catch(e => e));

    const user = new UserService();
    const result = await user.getUser(1)

    expect(result).toEqual( 'getUser error');
    expect(userServiceUpdateMock).toHaveBeenCalled();
  });

  it("it should create user", async () => {
    const user = new UserService();
    const res = await request(app)
      .post('/user/').send({age: 19, login: "sdat", password: "124asd"})
      .type('form')
    const result = await user.createUser({login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '})

    expect(res.status).toEqual(200);
    expect(result).toEqual({"age": 19, "id": 1, "isDeleted": false, "login": "st", "password": "124asd "});
    expect(userServiceCreateMock).toHaveBeenCalled();
  });

  it("it should not create user", async () => {
    const userServiceUpdateMock = jest
      .spyOn(UserService.prototype, 'createUser')
      .mockReturnValue(Promise.reject('create error').catch(e => e));

    const user = new UserService();
    const result = await user.createUser({login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '})

    expect(result).toEqual( 'create error');
    expect(userServiceUpdateMock).toHaveBeenCalled();
  });

  it("it should update user", async () => {
    const user = new UserService();
    app.put('/user/4', function(req, res){
      res.send({login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '});
    });

    const result = await user.updateUser(4,{login: 'st', age: 19, password: '124asd '})
    const res = await request(app)
      .put('/user/4').send({login: 'st', age: 19,password: 'somePassword3'}).type('form')

    expect(res.status).toEqual(200);
    expect(result).toEqual( [{"age": 19, "id": 4, "isDeleted": false, "login": "st", "password": "124asd "}]);
    expect(userServiceUpdateMock).toHaveBeenCalled();
  });

  it("it should not update user", async () => {
    const userServiceUpdateMock = jest
      .spyOn(UserService.prototype, 'updateUser')
      .mockReturnValue(Promise.reject('update error').catch(e => e));

    const user = new UserService();
    const result = await user.updateUser(1,{login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '})

    expect(result).toEqual( 'update error');
    expect(userServiceUpdateMock).toHaveBeenCalled();
  });

  it("it should delete user", async () => {
    const user = new UserService();
    const res = await request(app).delete('/user/1')
    const result = await user.deleteUser(1)

    expect(res.status).toEqual(200);
    expect(result).toEqual(1);
    expect(userServiceDeleteMock).toHaveBeenCalled();
  });

  it("it should not delete user", async () => {
    const userServiceDeleteMock = jest
      .spyOn(UserService.prototype, 'deleteUser')
      .mockReturnValue(Promise.reject('error').catch(e => e));
    const user = new UserService();
    const result = await user.deleteUser(1)

    expect(result).toEqual('error');
    expect(userServiceDeleteMock).toHaveBeenCalled();
  });

  it("it should search user", async () => {
    const user = new UserService();
    const res = await request(app).get('/user/').send({login: 'st', limit: 10})
    const result = await user.searchUser('st', 10);

    expect(res.status).toEqual(200);
    expect(result).toEqual([
      {login: 'st', age: 19, id: 1, isDeleted: false, password: '124asd '},
      {login: 'sta', age: 29, id: 2, isDeleted: false, password: '124asda22 '}
    ]);
    expect(userServiceSearchMock).toHaveBeenCalled();
  });

  it("it should not search user", async () => {
    const userServiceSearchMock = jest
      .spyOn(UserService.prototype, 'searchUser')
      .mockReturnValue(Promise.reject('search error').catch(e => e));

    const user = new UserService();
    const result = await user.searchUser('st', 10);

    expect(result).toEqual('search error');
    expect(userServiceSearchMock).toHaveBeenCalled();
  });

})