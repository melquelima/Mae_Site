import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";

import { LoginComponent } from "./login/login.component";
import { PricingComponent } from "./pricing/pricing.component";
import { LockComponent } from "./lock/lock.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    PricingComponent,
    LockComponent,
    RegisterComponent,
    LogoutComponent
  ],
  exports: [LoginComponent]
})
export class AuthLayoutModule {}
