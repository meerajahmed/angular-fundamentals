import {IUser} from "./user.model";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

export class AuthService {

  currentUser: IUser;

  constructor(private http: Http){}

  loginUser( userName: string, password: string ): Observable<Response|boolean> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    let loginInfo = { username: userName, password: password };
    return this.http.post("/api/login", JSON.stringify(loginInfo), options)
      .do( res => {
        if(res){
          this.currentUser = <IUser>res.json().user;
        }
      })
      .catch(error => Observable.of(false));
  }

  isAuthenticated(): boolean{
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:  string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}