import {findByLogin} from "../data-access/user";
import * as jwt from "jsonwebtoken";
import {JWT_SECRET_KEY} from "../constants/constants";

export class LoginService {
  async loginUser(login: string, password: string) {
    const user = await findByLogin(login)
      if (user?.password !== password && !user) {
        return new Error();
      } else {
        const payload = {login: user?.login, id: user?.id}
        return jwt.sign(payload, JWT_SECRET_KEY);
      }
  }
}
