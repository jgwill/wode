#!/usr/bin/env node
import { spawn } from 'child_process';

const proc = spawn('python', ['scripts/olca_info.py'], { stdio: 'inherit' });
proc.on('error', (err) => {
  console.error('Failed to run Python olca_info script.', err);
});

