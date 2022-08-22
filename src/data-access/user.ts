import { Op } from 'sequelize';
import { User } from '../models/user.model';
import { IUser } from "../interfeces/IUsers";

export const findOne = async (id: number) => {
  try {
    return await User.findOne({
    where: { id }
  })
  } catch(error){
    console.log(error);
    throw error;
  }
}

export const create = async (user: IUser): Promise<IUser> => {
  try{
    return await User.create(user);
  }catch(error){
    console.log(error);
    throw error;
  }
}

export const remove = async (id: number) => {
  let user = await User.update(
    { isDeleted: true },
    {
      where: { id },
    }
  );
  return user[0];
}

export const update = async (id: number, updatedUser: IUser) =>{
  try {
    const user = await User.update(updatedUser, {
      where: { id, isDeleted: false },
      returning: true
    });
    return user ? user[1] : null;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const findAll = async (login: string, limit: number) => {
  const iLike = Op.iLike;
  return await User.findAll({
    limit: limit,
    where: {login: {[iLike]: login + "%"}, isDeleted: false},
    order: [
      ['login', 'ASC'],
    ],
  });
}

export const getAll = async (): Promise<IUser[]> => {
  try {
    return await User.findAll({
      where: {}
    });
  } catch(error){
    console.log(error);
    throw error;
  }
}
