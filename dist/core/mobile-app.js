"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nivinjoseph/n-ext");
const n_nativescript_vue_1 = require("n-nativescript-vue");
const n_config_1 = require("@nivinjoseph/n-config");
const n_exception_1 = require("@nivinjoseph/n-exception");
class MobileApp {
    constructor() {
        this._isBootstrapped = false;
    }
    bootstrap() {
        if (this._isBootstrapped)
            throw new n_exception_1.InvalidOperationException("bootstrap");
        this.configureGlobalConfig();
        const s = new n_nativescript_vue_1.default({
            template: `
                        <Frame>
                        <Page>
                            <Label v-if="true" text="Hello Nivin"/>
                            <Label v-else text="Hello Shrey"/>
                        </Page>
                        </Frame>
                    `
        });
        s.$start();
        this._isBootstrapped = true;
    }
    configureGlobalConfig() {
        if (n_config_1.ConfigurationManager.getConfig("env") === "dev") {
            console.log("Bootstrapping in DEV mode.");
            n_nativescript_vue_1.default.config.silent = false;
            n_nativescript_vue_1.default.config.devtools = true;
            n_nativescript_vue_1.default.config.performance = true;
            n_nativescript_vue_1.default.config.productionTip = true;
        }
        else {
            n_nativescript_vue_1.default.config.silent = true;
            n_nativescript_vue_1.default.config.devtools = false;
            n_nativescript_vue_1.default.config.performance = false;
            n_nativescript_vue_1.default.config.productionTip = false;
        }
    }
}
exports.MobileApp = MobileApp;
//# sourceMappingURL=mobile-app.js.map