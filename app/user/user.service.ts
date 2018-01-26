import {IUser} from "./user.model";

export class AuthService {
  currentUser: IUser;
  loginUser( userName: string, password: string ): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: "John",
      lastName: "Papa"
    }
  }
  isAuthenticated(): boolean{
    return !!this.currentUser;
  }
}