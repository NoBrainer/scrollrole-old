#!/usr/bin/env node
'use strict';

const prefix = require('./time-prefix');

// Get the message from the args
const args = process.argv || [];
let message = args.length > 2 ? args[2] : null;

// Print the timestamped message
console.log(prefix+(message || 'Done.'));