import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { PricingComponent } from "./pricing/pricing.component";
import { LockComponent } from "./lock/lock.component";
import { RegisterComponent } from "./register/register.component";
import { PresentationComponent } from "../../pages/presentation/presentation.component";
import { LogoutComponent } from "./logout/logout.component";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "logout",
        component: LogoutComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  }
];
