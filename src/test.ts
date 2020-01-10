

/**
 * The following works with pure JS by 'npm install uuid'
 *     const uuidv1 = require('uuid/v1');
 *     console.log(uuidv1());
 * 
 * I have not figured out how to get it to work with 'npm install @types/uuid yet.
 * Dont use
 *   import uuid from 'uuid' because some browsers do not support it 
 */
const uuid = require('uuid');
import { Icons, LinkIconsService } from './services/link-reveal-service/icons-service';
// const axios = require ('axios');
// import { AxiosPromise } from "axios";

// interface Icon {
//     id: string,
//     something: string,
//     name: string,
//     URL: string,
//     clientId: string
// }

// interface IconItems extends Array<Icon> {}

// interface Icons {
//     version: number,
//     icons: IconItems
// }

// function getIcons(): AxiosPromise<Icons> {
//     return axios.get('https://mylinks.linkcreationstudio.com/icons');
// }

// // const response: AxiosPromise = axios.get('https://mylinks.linkcreationstudio.com/icons', {
    
// // });

// const promise = getIcons();

// promise.then(response => {
//     // console.log(response.data);
//     const list: Icons = response.data;
//     console.log(list.version);
//     console.log(list.icons[0]);
// })
// const icons = await LinkIconsService.getIcons();
LinkIconsService.getIcons().then(
    (list: Icons) => {
        if (list == null) {
            console.log("No icons returned");
        } else {
            console.log(list.version);
            console.log(list.icons[0]);
        }
    }
);
console.log(uuid.v4());