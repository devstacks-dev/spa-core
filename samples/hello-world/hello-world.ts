import { DevStacks } from "../../framework/src/devstacks";
import { DsScreen } from "../../framework/src/screen/ds-screen";

class HomePage extends DsScreen
{
    Render(): HTMLElement {
        const root = document.createElement('div');
        const title = document.createElement('h1');
        title.textContent = 'Hello World';
        root.appendChild(title);

        return root;
    }
}

const app = new DevStacks('hello-world-app');
app.router.AddOne({ Path: '/', Screen: HomePage });

app.Init(document.body);