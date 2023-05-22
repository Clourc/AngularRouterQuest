import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignupComponent } from "./signup/signup.component";

const ROUTES: Routes = [
    { path: 'user-profile', component: UserProfileComponent},
    { path: 'signup', component: SignupComponent},
    { path: '', redirectTo: '/user-profile', pathMatch: 'full'}
]

export { ROUTES };