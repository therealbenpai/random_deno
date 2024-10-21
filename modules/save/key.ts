import fs from 'node:fs';
import crypto from 'node:crypto';

class KeyManager {
    loc: string;
    constructor() {
        this.loc = ''
    }
    set key(privateKey: string) {
        this.loc = privateKey
    }
    get keys() {
        const privKey = crypto.createPrivateKey(fs.readFileSync(this.loc, 'utf8'));
        const pubKey = crypto.createPublicKey(privKey);
        return { pub: pubKey, priv: privKey };
    }
}

export {
    KeyManager,
}