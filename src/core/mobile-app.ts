import Vue from "n-nativescript-vue";


export class MobileApp
{
    public bootstrap(): void
    {
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
    }
}