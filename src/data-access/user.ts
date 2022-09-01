import {Op} from 'sequelize';
import {User} from '../models/user.model';
import {IUser} from "../interfeces/IUsers";

export const findOne = async (id: number) => {
  return await User.findOne({
    where: {id}
  })
}

export const create = async (user: IUser): Promise<IUser> => {
  return await User.create(user);
}

export const remove = async (id: number) => {
  let user = await User.update(
    {isDeleted: true},
    {where: {id}, returning: true}
  );
  return user[0];
}

export const update = async (id: number, updatedUser: IUser) => {
  const user = await User.update(updatedUser, {
    where: {id, isDeleted: false},
    returning: true
  });
  return user ? user[1] : null;
}

export const findByLogin = async (login: string) => {
  return await User.findOne({
    where: {
      login
    }
  })
}

export const findAll = async (searchSubLogin: string, limit: number) => {
  const iLike = Op.iLike;
  return await User.findAll({
    limit: limit,
    where: {login: {[iLike]: searchSubLogin + "%"}, isDeleted: false},
    order: [
      ['login', 'ASC'],
    ],
  });
}

export const getAll = async (): Promise<IUser[]> => {
  return await User.findAll({
    where: {}
  });
}
