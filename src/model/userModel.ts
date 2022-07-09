import { Op } from 'sequelize';
import { dbConnector} from "../db/dbConnect";
import { userModel } from './user';

const User = dbConnector.define(
  'users', userModel,
  {freezeTableName: true }
);

User.sync();

// @ts-ignore
async function findOne(id: string) {
  try{
  let user = await User.findOne({
    where: { id }
  });
  return user;
  }catch(error){
    console.log(error);
  }
}

// @ts-ignore
async function create(user: any) {
  try{
    let data = await User.create(user);
    return data;
  }catch(error){
    console.log(error);
  }
}

async function remove(id: string) {
  let user = await User.update(
    { isDeleted: true },
    {
      where: { id },
    }
  );
  return user[0];
}

async function update(id: string, updatedUser: any) {
  try {
    let user = await User.update(updatedUser, {
      where: { id, isDeleted: false },
      returning: true
    });
    return user ? user[1] : null;
  } catch (error) {
    return null;
  }
}

async function findAll(login: string, limit: any) {
  let iLike = Op.iLike;
  let users = await User.findAll({
    limit: limit,
    where: { login: { [iLike]: login + "%" }, isDeleted: false },
    order: [
      ['login', 'ASC'],
    ],
  });
  return users;
}

// @ts-ignore
async function getAll() {
  try {
   let allUsers = await User.findAll({
     where: {}
     });
    return allUsers;
  } catch(error){
    console.log(error);
  }
}

export = { create, update, findOne, findAll, remove, getAll };