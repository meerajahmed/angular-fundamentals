import {Routes} from "@angular/router";
import {ProfileComponent} from "./profile.component";

export const userRoutes: Routes = [
  // relative path wil be /user/profile
  { path: "profile", component: ProfileComponent }
];