import { IRouteableComponent } from "@aurelia/router";

export class MyApp{
    constructor() {
        console.log('Constructor MyApp');
    }

    load() {
        console.log('+++ Load MyApp');
    }
}
