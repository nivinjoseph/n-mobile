"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_nativescript_vue_1 = require("n-nativescript-vue");
class MobileApp {
    bootstrap() {
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
    }
}
exports.MobileApp = MobileApp;
//# sourceMappingURL=mobile-app.js.map