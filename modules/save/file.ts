import { Buffer } from "node:buffer";
import fs from 'node:fs';

class FileManager {
    static save(data: string | Buffer, filename: string) {
        fs.writeFileSync(filename, Buffer.from(data as string, 'base64url'), { encoding: 'binary' });
    }
    static load(filename: string) {
        return Buffer.from(fs.readFileSync(filename, { encoding: 'binary' }), 'binary');
    }
}

export {
    FileManager,
};