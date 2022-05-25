import {LoginPage} from "./login-page";
import {inject, IRouter} from "aurelia";

@inject(IRouter)
export class AboutPage {
  constructor(private router:IRouter) {
  }

  public bound() {
    this.router.load('/login-page');

    // return "login-page";
    // return "login-page";
    return true;
  }
}
