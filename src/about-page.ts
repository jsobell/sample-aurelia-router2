import { inject } from "aurelia";
import { IRouter } from '@aurelia/router';

@inject(IRouter)
export class AboutPage {
  constructor(private router:IRouter) {
  }

//  public canLoad() {
//    return "login-page";
//  }


  public bound() {
    this.router.load('/root/login-page');
    return false;
  }
}
