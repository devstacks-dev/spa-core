import { DsRouter } from "./routing/ds-router";

export class DevStacks
{
    public router: DsRouter;
    private readonly _appId: string;
    private readonly _rootElement: HTMLElement;

    constructor(appId: string)
    {
        this._appId = appId;
        this._rootElement = this.CreateRootElement();
        this.router = new DsRouter();
    }

    public Init(parent: HTMLElement): void
    {
        parent.appendChild(this._rootElement);

        const screen = this.router.Route(location.href).Render();
        this._rootElement.appendChild(screen);
    }

    private CreateRootElement(): HTMLElement
    {
        const el = document.createElement('div');
        el.setAttribute('id', this._appId);

        return el;
    }
}