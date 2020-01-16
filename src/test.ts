

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
import { Proxy, HpidLoginProxyService } from './services/link-reveal-service/hpid-login-service';


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

HpidLoginProxyService.getProxyLinks().then(
  (proxy: Proxy) => {
      console.log("Proxy sign in url: " + proxy.sign_in_url);
  }
);

console.log(uuid.v4());