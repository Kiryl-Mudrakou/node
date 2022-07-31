import { Group } from '../models/group.model';
import { IGroup } from '../interfeces/IUsers';

export const getAll = async () => {
  return await Group.findAll();
};

export const getById = async (id: number) => {
  return await Group.findByPk(id);
};

export const createOne = async (group: IGroup) => {
  return Group.create({ name: group.name, permissions: group.permissions }, { returning: true });
};

export const updateOne = async (id: number, group: IGroup) => {
  return Group.update(group, {
    where: {
      id
    },
    returning: true
  });
};

export const deleteOne = async (id: number) => {
  return Group.destroy({
    where: {
      id
    }
  });
};