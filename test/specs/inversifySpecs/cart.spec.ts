import { cartContainer } from "../../../containers/Cart/cart.inversify";
import { cartSymbol } from "../../../containers/Cart/cart.symbol";
import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { productContainer } from "../../../containers/Product/product.inversify.conf";
import { productSymbol } from "../../../containers/product/product.symbol";
import { Cart } from "../../abstract classes/Cart";
import { Login } from "../../abstract classes/Login";
import { Product } from "../../abstract classes/Product";

const login = loginContainer.get<Login>(loginSymbol.Login);
//const product = productContainer.get<Product>(productSymbol.Product);
const cart = cartContainer.get<Cart>(cartSymbol.Cart);

describe("Sauce_Cart screen test", ()=> {
before (async()=>{
await login.performLogin("standard_user", "secret_sauce")
})

it("Cart Functionality", async()=>{
await cart.checkout();
await cart.continueShopping();
})

})