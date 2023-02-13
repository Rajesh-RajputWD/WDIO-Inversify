import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { Login } from "../../abstract classes/Login";

const login = loginContainer.get<Login>(loginSymbol.Login);

describe("Inversify_Test ", () => {
  it("Android Login_Inversify", async () => {
    login.performLogin("standard_user", "secret_sauce");

    login.validateLogin();
  });
});
