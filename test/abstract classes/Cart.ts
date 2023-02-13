import { injectable } from "inversify";
import "reflect-metadata";
import { cartSymbol } from "../../containers/Cart/cart.symbol";

@injectable()
export abstract class Cart {

abstract checkout(): Promise<void>;
abstract continueShopping(): Promise<void>;

}