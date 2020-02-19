import "@nivinjoseph/n-ext";
import Vue from "n-nativescript-vue";
import { ConfigurationManager } from "@nivinjoseph/n-config";
import { InvalidOperationException } from "@nivinjoseph/n-exception";


export class MobileApp
{
    private _isBootstrapped = false;
    
    public bootstrap(): void
    {
        if (this._isBootstrapped)
            throw new InvalidOperationException("bootstrap");
        
        this.configureGlobalConfig();
        
        const s = new Vue({
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
    
    private configureGlobalConfig(): void
    {
        if (ConfigurationManager.getConfig("env") === "dev")
        {
            console.log("Bootstrapping in DEV mode.");

            Vue.config.silent = false;
            Vue.config.devtools = true;
            Vue.config.performance = true;
            Vue.config.productionTip = true;
        }
        else
        {
            Vue.config.silent = true;
            Vue.config.devtools = false;
            Vue.config.performance = false;
            Vue.config.productionTip = false;
        }
    }
}