import { DsRoute } from "./ds-route";
import { DsScreen } from "../screen/ds-screen";

export class DsRouter
{
    private _routes: DsRoute[];

    constructor() {
        this._routes = [];
    }

    public AddOne(route: DsRoute): DsRouter
    {
        this._routes.push(route);
        return this;
    }

    public AddMany(routes: DsRoute[]): DsRouter
    {
        routes.forEach((route) => {
            this.AddOne(route);
        });

        return this;
    }

    public Route(url: string): DsScreen
    {
        const route = this._routes.find(route => url.indexOf(route.Path) > -1);
        return new route.Screen();
    }
}