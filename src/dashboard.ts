import {Tenant} from "./tenant";
import {Tenants} from "./tenants";
import {IRouteViewModel, RouteNode} from "aurelia";
import {Root} from "./root";

export class Dashboard implements IRouteViewModel {
  public static parameters = ['id'];
  public message = 'Dashboard';

  constructor() {
    // console.warn("Injected Tenant:",td);
  }

  path<T>(instruction, modelType: any):T {
    let component = instruction.endpoint.scope.endpointContent;
    const target = modelType.name;
    while (component?.instruction.component.type?.name != target) {
      if (!component?.instruction.component.type?.name)
        return null;
      component = component.instruction.endpoint.scope.endpointContent;
    }
    return component.instruction.component.instance;
  }

  load( parameters, instruction:RouteNode) {
    console.log("Tenant", this.path<Tenant>(instruction, Tenant).tenant);
    console.log("Tenants", this.path<Tenants>(instruction, Tenants).tenants);
    console.log("Root", this.path<Root>(instruction, Root).user);
    console.log("Dashboard", this.path<Dashboard>(instruction, Dashboard));
  }
}
