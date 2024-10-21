import { Buffer } from "node:buffer";
import crypto from 'node:crypto';

import type { Nullable } from "types/helpers";

class User {
    name: {
        first: Nullable<string>;
        last: Nullable<string>;
        display: Nullable<string>;
    };
    email: Nullable<string>;
    uuid: string;
    id: number;
    private _password: string = '';
    created: string;
    updated: string;
    constructor() {
        this.name = {
            first: null,
            last: null,
            display: null,
        };
        this.email = null;
        this.uuid = crypto.randomUUID();
        this.id = crypto.randomInt(1e9);
        this.created = new Date().toISOString();
        this.updated = new Date().toISOString();
    }
    get salt() {
        return Buffer.concat([Buffer.from(this.uuid), Buffer.from(this.id.toString())]).toString('base64url');
    }
    set salt(_) {
        throw new TypeError('Salt is read-only');
    }
    set password(password: string) {
        this._password = crypto.pbkdf2Sync(
            Buffer.from(password, 'utf8'),
            Buffer.from(this.salt, 'base64url'),
            64, 32, 'sha256'
        ).toString('base64url');
    }
    get password() {
        return this._password;
    }
    load(dataString: string) {
        const data = JSON.parse(dataString.replace(/[^ -~]/gmi, ''));
        Object.assign(this, data);
        return this;
    }
}

export {
    User
}