import Vue from "n-nativescript-vue";


export class MobileApp
{
    public bootstrap(): void
    {
        const s = new Vue({
            template: `
                        <Frame>
                        <Page>
                            <Label text="Hello world"/>
                        </Page>
                        </Frame>
                    `
        });
        
        s.$start();
    }
}