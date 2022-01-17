import { DsScreen } from "../screen/ds-screen";

export interface DsRoute
{
    Path: string;
    Screen: typeof DsScreen;
}