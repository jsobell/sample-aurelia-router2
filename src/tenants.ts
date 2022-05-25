import { Store } from "./store";

export class Tenants {
  public tenants;

  public constructor(private store: Store) { }

  public async load() {
    this.tenants = await this.store.getTenants();
  }

}
