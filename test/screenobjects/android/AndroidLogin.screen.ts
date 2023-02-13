//@ts-ignore
import AndroidProductsScreen from "./AndroidProducts.screen.ts";
import { injectable } from "inversify";
import "reflect-metadata";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { Login } from "../../abstract classes/Login";

@injectable()
export default class AndroidLoginScreen extends Login {
  get usernameField() {
    //Find by UiAutomator
    const Selector = 'new UiSelector().text("Username").className("android.widget.EditText")'
    return $(`android=${Selector}`);
  }

  get passwordField() {
    //FInd by UiAutomator
    const Selector = 'new UiSelector().text("Password").className("android.widget.EditText")'
    return $(`android=${Selector}`)
    //return $("~test-Password");
  }

  get loginBtn() {
    return $("~test-LOGIN");
  }

  get errorMsg() {
    return $(
      '//*[@text="Username and password do not match any user in this service."]'
    );
  }
  async performLogin(userName: string, pass: string): Promise<void> {
    await this.usernameField.setValue(userName);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
  }

  async validateLogin(): Promise<void> {
    await expect(
      $('//android.widget.TextView[@text="PRODUCTS"]')
    ).toBeDisplayed();
    console.log("successfully validated");
  }

  async validateInvalidLogin(): Promise<void> {
    await expect(this.errorMsg).toBeDisplayed();
    console.log("Login failed");
  }
}

// export default new AndroidLoginScreen();
