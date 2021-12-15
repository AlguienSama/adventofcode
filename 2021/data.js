import fs from 'fs';

export default function getData (file) {
    try {
        return fs.readFileSync(file, 'utf8');
    } catch (err) {
        console.log(err);
    }
}