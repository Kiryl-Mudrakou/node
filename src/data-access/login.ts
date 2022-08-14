import {User} from "../models/user.model";

export const Login = (login: string) => {
  return User.findOne({
    where: {
      login
    }
  });
};