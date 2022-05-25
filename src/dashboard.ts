import {Tenant} from "./tenant";

export class Dashboard {
  public static parameters = ['id'];
  public message = 'Dashboard';

  constructor() {
    // console.warn("Injected Tenant:",td);
  }

  load(parameters, instruction) {
    console.log("Dashboard with ", parameters);
    console.log("VM", instruction.endpoint.scope.endpointContent.instruction.component.instance);
  }
}
