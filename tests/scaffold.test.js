import { execSync } from 'child_process';
import assert from 'assert';

const output = execSync('node scripts/wode-scaffold.js').toString();
assert(output.includes('Welcome to WODE scaffold'));
console.log('scaffold script OK');
