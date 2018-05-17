import { Component, OnInit } from "@angular/core";
import { LoginCredentials, UserService } from "../api/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formCreds: LoginCredentials = new LoginCredentials();

  constructor(public userTruc: UserService, private resTruc: Router) {}

  ngOnInit() {}

  loginSubmit() {
    console.log("je suis dans le loginsubmit");

    this.userTruc
      .postLogin(this.formCreds)
      .then(result => {
        console.log("je suis dans le loginsubmit");
        this.resTruc.navigateByUrl("/");
      })
      .catch(err => {
        console.log("Login Error");
        console.log(err);
      });
  }
}
