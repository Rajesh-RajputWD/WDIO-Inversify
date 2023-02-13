import { Container } from "inversify";


export const cartContainer = new Container();
cartContainer.bind<Cart>(cartSymbol.Cart).to(AndroidCartScreen);