import {Login} from "../data-access/login";

export class LoginService {
  loginUser(login: string) {
    return Login(login)
  }
}
