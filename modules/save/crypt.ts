import * as assert from '@std/assert';
import crypto from 'node:crypto';
import {KeyManager} from './key.ts'
import { Buffer } from "node:buffer";

class SecurityManager {
    keyMgr: KeyManager;
    static CRYPTO_DEFAULTS = {
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    };
    constructor(keyMgr: KeyManager) {
        assert.assertInstanceOf(keyMgr, KeyManager)
        this.keyMgr = keyMgr;
    }
    cd(d: Buffer, cs: number) {
        const c = [];
        for (let i = 0; i < d.length; i += cs) {
            const tb = Buffer.alloc(cs);
            d.copy(tb, 0, i, i + cs);
            c.push(tb);
        }
        return c;
    }
    encrypt(data: Buffer) {
        const cs = 958;
        const chunks = this.cd(data, cs);
        const encryptedChunks = chunks.map(chunk => {
            return crypto.publicEncrypt(
                Object.assign({ key: this.keyMgr.keys.pub }, SecurityManager.CRYPTO_DEFAULTS),
                chunk
            );
        });
        const encryptedBuffer = Buffer.concat(encryptedChunks);
        return encryptedBuffer
    }
    decrypt(encryptedData: Buffer) {
        const cs = 1024;
        const encryptedChunks = this.cd(encryptedData, cs);
        const decryptedChunks = encryptedChunks.map(encryptedChunk => {
            return crypto.privateDecrypt(
                Object.assign({ key: this.keyMgr.keys.priv }, SecurityManager.CRYPTO_DEFAULTS),
                encryptedChunk
            );
        });
        return Buffer.concat(decryptedChunks);
    }
}

export {
    SecurityManager,
}