import { Store } from "./store";
import {IRouteViewModel} from "aurelia";

export class Tenant implements IRouteViewModel {
  public static parameters = ['id'];

  public tenant;

  public constructor(private store: Store) { }

  public async load(parameters, instruction) {
    if (parameters.id != null) {
      this.tenant = await this.store.getTenant(parameters.id);
      return;
    }
    this.tenant = (await this.store.getTenants())[0];
    instruction.parameters.set({ id: this.tenant.id });
  }
}
