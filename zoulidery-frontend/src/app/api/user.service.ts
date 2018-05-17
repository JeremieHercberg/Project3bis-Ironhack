import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/toPromise";

import { environment } from "../../environments/environment";

@Injectable()
export class UserService {
  currentUser: User;
  constructor(private ajaxTruc: HttpClient) {}

  // GET --- CHECK LOGIN
  check() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/checklogin`, { withCredentials: true })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST --- SIGN UP
  postSignup(creds: LoginCredentials) {
    return this.ajaxTruc
      .post(`${environment.backUrl}/api/signup`, creds, {
        withCredentials: true
      })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse;
      });
  }

  //POST --- LOG IN
  postLogin(creds: LoginCredentials) {
    console.log("lalalal");
    return this.ajaxTruc
      .post(
        `${environment.backUrl}/api/login`,
        //{ username: "blah", password: "blah" },
        creds,
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResponse: any) => {
        console.log(apiResponse);
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // GET --- LOG OUT
  logOut() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/logout`, { withCredentials: true })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }
}

export class User {
  _id: string;
  userName: string;
  emailAddress: string;
  password: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  username: string;
  password: string;
}
