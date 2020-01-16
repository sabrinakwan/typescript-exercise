const axios = require('axios-jsonp-pro');
import { AxiosPromise } from "axios";

export interface Proxy {
    sign_in_url: string,
    sign_out_url: string,
    create_account_url: string,
    refresh_token_url: string
}

const emptyProxy = (): Proxy => ({
    sign_in_url: '',
    sign_out_url: '',
    create_account_url: '',
    refresh_token_url: ''
});

const proxyServerUrl: string = 'https://mylinks-staging.linkcreationstudio.com';
const proxyUrl: string = proxyServerUrl + '/auth/creds';

export class HpidLoginProxyService {

    location: string = '';
    defaultProxy: Proxy = {
        sign_in_url: proxyServerUrl + '/auth/sign_in?redirect_url=' + this.location,
        sign_out_url: proxyServerUrl + '/auth/sign_out?redirect_url=' + this.location,
        create_account_url: proxyServerUrl + '/auth/create_account?redirect_url=' + this.location,
        refresh_token_url: proxyServerUrl + '/refresh_access_token' + this.location
    };
    
    apiClient = axios.jsonp.create({
        baseURL: proxyUrl,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    static async getProxyLinks(): Promise<Proxy> {

        try {
            const response = await this.getProxyApiClient();
            console.log(response);
            const hpidProxy: Proxy = response.data;
            return hpidProxy;
        } catch (error) {
            console.log("error", error);
            return emptyProxy();
        };
    }

    private static getProxyApiClient(): AxiosPromise<Proxy> {
        return axios.get(
            proxyUrl,
            // { headers:  {
            //     "REFERER": "https://workflow-local.linkcreationstudio.com"
            // }
            // }
        );
    }

}