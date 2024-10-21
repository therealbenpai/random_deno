import { SecurityManager } from './crypt.ts';
import { KeyManager } from './key.ts';
import { FileManager } from './file.ts';
import { User } from './user.ts';
import { License } from './license.ts';
import { Buffer } from "node:buffer";
export {
    SecurityManager,
    KeyManager,
    FileManager,
    User,
    License,
}

type BufferOrString = WithImplicitCoercion<string> | { [globalThis.Symbol.toPrimitive](hint: "string"): string; }

if (import.meta.main) {
    class _Generator {
        static genLicense(answers: { userData: BufferOrString; licenseData: BufferOrString; output: string; }) {
            console.log('Generating license...');
            const keyMgr = new KeyManager();
            keyMgr.key = './ssl/cert.key';
            const secMgr = new SecurityManager(keyMgr);
            const user = (new User()).load(Buffer.from(answers.userData, 'base64').toString('utf8'));
            const license = (new License()).load(Buffer.from(answers.licenseData, 'base64').toString('utf8'), false);
            license.user = user;
            const licenseData = JSON.stringify(license);
            const encryptedLicense = secMgr.encrypt(Buffer.from(licenseData, 'utf8'));
            FileManager.save(encryptedLicense, answers.output);
        }
        static valLicense(argv: { i: string; }) {
            console.log('Validating license...');
            const keyMgr = new KeyManager();
            keyMgr.key = './ssl/cert.key';
            const secMgr = new SecurityManager(keyMgr);
            const encryptedLicense = FileManager.load(argv.i);
            const decryptedLicense = secMgr.decrypt(encryptedLicense);
            const license = (new License()).load(decryptedLicense.toString('utf8'));
            console.log('License:', license);
        }
    }
}