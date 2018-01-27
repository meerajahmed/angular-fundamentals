import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "./user.service";

@Component({
  templateUrl: "app/user/profile.component.html"
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor( private router: Router, private authService: AuthService ) {
  }
  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }
  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
  cancel(){
    this.router.navigate(['events']);
  }
}
