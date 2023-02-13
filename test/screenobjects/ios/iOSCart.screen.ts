import { injectable } from "inversify";
import { Cart } from "../../abstract classes/Cart";

@injectable()
export default class iOSCartScreen extends Cart {
    async checkout(): Promise<void> {
        //need to write locator
    }

    async continueShopping(): Promise<void> {
        //need to write locator
    }
}