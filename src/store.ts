export class Store {
  public tenants = [
    { id: 'abc', name: 'Tenanant ABC' },
    { id: 'def', name: 'Tenanant DEF' },
  ];

  public async getTenants() {
    return this.tenants;
  }

  public async getTenant(id: string) {
    return this.tenants.find(tenant => tenant.id == id);
  }
}
