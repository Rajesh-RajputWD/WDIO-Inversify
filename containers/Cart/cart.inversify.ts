import "reflect-metadata";
import { Container } from "inversify";
import { Cart } from "../../test/abstract classes/Cart";
import AndroidCartScreen from "../../test/screenobjects/android/AndroidCart.screen";
import { cartSymbol } from "./cart.symbol";

export const cartContainer = new Container();
cartContainer.bind<Cart>(cartSymbol.Cart).to(AndroidCartScreen);