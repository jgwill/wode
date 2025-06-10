#!/usr/bin/env node
import { spawn } from 'child_process';

const args = process.argv.slice(2);

const proc = spawn('coaia', ['fuse', ...args], { stdio: 'inherit' });
proc.on('error', (err) => {
  console.error('Failed to run coaia fuse command. Is coaiapy installed?', err);
});
