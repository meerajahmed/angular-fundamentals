import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "./user.service";
import {Toastr, TOASTR_TOKEN} from "../shared/toastr.service";

@Component({
  templateUrl: "app/user/profile.component.html",
  styles: [`
    em { float: right; color:#E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
    .l-float-right { float: right}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor( private router: Router, private authService: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern("[a-zA-Z]+")] );
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues): void {
    if( this.profileForm.valid ) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success("Profile Saved")
        });
      //this.router.navigate(['events']);
    }
  }

  validateLastName(): boolean {
    return this.lastName.invalid && this.lastName.touched;
  }

  validateFirstName(): boolean {
    return this.firstName.invalid && this.firstName.touched;
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
  logout(){
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(["/user/login"]);
      });
  }
}
