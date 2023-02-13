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
      "appium:app": "bs://76aee2e2082d3c709e49e5da430f67f1b26c8f84",
    },
  ]);

exports.config = config;
