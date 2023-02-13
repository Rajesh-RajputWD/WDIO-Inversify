import { injectable } from "inversify";
import { Cart } from "../../abstract classes/Cart";
import "reflect-metadata";
import { cartSymbol } from "../../../containers/Cart/cart.symbol";

@injectable()
export default class AndroidCartScreen extends Cart {

async checkout(): Promise<void> {
await (await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')).click();
}

async continueShopping(): Promise<void> {
await (await $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]/android.widget.TextView')).click();
}

}