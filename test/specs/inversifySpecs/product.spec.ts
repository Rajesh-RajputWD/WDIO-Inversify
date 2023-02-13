import "reflect-metadata";
import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { productContainer } from "../../../containers/Product/product.inversify.conf";
import { productSymbol } from "../../../containers/Product/product.symbol";
import { Login } from "../../abstract classes/Login";
import { Product } from "../../abstract classes/Product";

//const login = loginContainer.get(Login)(loginSymbol.Login);
const login = loginContainer.get<Login>(loginSymbol.Login);
const product = productContainer.get<Product>(productSymbol.Product);
describe("Product test",()=>{
    before(async()=>{
        await login.performLogin("standard_user", "secret_sauce")
    })
    it("Click--->product",async()=>{
        //Please enter the exact product name
        await product.clickOnProduct("Sauce Labs Bike Light")
    })
})