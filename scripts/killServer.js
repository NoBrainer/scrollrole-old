#!/usr/bin/env node
'use strict';

const fkill = require('fkill');

const config = require('./readConfig');
const prefix = require('./time-prefix');

fkill(':'+config.port, { force: true })
    .then(() => {
        console.log(prefix+"Killed process on port " + config.port);
    })
    .catch(() => {
        console.log(prefix+"Failed to kill process on port " + config.port);
    });