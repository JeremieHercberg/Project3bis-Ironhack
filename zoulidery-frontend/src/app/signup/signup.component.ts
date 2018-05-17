import { Component, OnInit } from "@angular/core";
import { LoginCredentials, UserService } from "../api/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  formCreds: LoginCredentials = new LoginCredentials();

  constructor(public userTruc: UserService, private resTruc: Router) {}

  ngOnInit() {}

  signupSubmit() {
    this.userTruc
      .postSignup(this.formCreds)
      .then(result => {
        this.resTruc.navigateByUrl("/");
      })
      .catch(err => {
        console.log("Log in Error");
        console.log(err);
      });
  }
}
