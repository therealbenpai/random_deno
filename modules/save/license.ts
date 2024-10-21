import crypto from 'node:crypto';
import { User } from './user.ts';

interface Legal {
    terms: string;
    access: string[]
}

class License {
    id: number;
    uuid: string;
    legal: Legal;
    created: string;
    user: User;
    constructor() {
        this.id = crypto.randomInt(1e9);
        this.uuid = crypto.randomUUID();
        this.legal = {
            // uuid
            terms: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
            access: [
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
            ]
        };
        this.created = new Date().toISOString();
        this.user = new User();
    }
    load(dataString: string, hasUser = true) {
        const data = JSON.parse(dataString.replace(/[^ -~]/gmi, ''));
        Object.assign(this, data, (hasUser) ? { user: (new User()).load(JSON.stringify(data.user)) } : {});
        return this;
    }
}

export {
    License
}