#!/usr/bin/env node
import { spawn } from 'child_process';

const proc = spawn('olca', ['--help'], { stdio: 'inherit' });
proc.on('error', (err) => {
  console.error('Failed to run olca CLI. Is the package installed?', err);
});
