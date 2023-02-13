//@ts-ignore
import { config } from "./wdio.conf.ts";

(config.user = "rajeshrajput_z9TKaB"),
  (config.key = "SaLpvKg6dnjs6ERsXNWz"),
  (config.specs = ["C:/Users/2259866/OneDrive - Cognizant/Desktop/WDIO-Inversify/test/specs/inversifySpecs/product.spec.ts"]),
  (config.capabilities = [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Samsung Galaxy S22 Ultra",
      "appium:automationName": "UIAutomator2",
      "appium:app": "bs://9d285332cc5538647db53773150699d5b2f1a47b",
    },
  ]);

exports.config = config;
