const axios = require('axios-jsonp-pro');
import { AxiosPromise } from "axios";

interface Icon {
    id: string,
    something: string,
    name: string,
    URL: string,
    clientId: string
}

interface IconItems extends Array<Icon> { }

export interface Icons {
    version: number,
    icons: IconItems
}

export class LinkIconsService {

    static async getIcons(): Promise<Icons> {
        const response = await this.getLinkIcons();
        const list: Icons = response.data;
        return list;
    } catch( error: Error ) {
        console.log("error", error.message);
        return null;
    }

    private static getLinkIcons(): AxiosPromise<Icons> {
        return axios.get('https://mylinks.linkcreationstudio.com/icons');
    }

}


