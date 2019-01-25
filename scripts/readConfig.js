#!/usr/bin/env node
'use strict';

let defaultConfig = {
    env: 'dev',
    port: 3000
};

let config;
try {
    config = require('../../scrollRoleConfig');
} catch(e1) {
    try {
        config = require('../scrollRoleConfig');
    } catch(e2) {
        config = defaultConfig;
    }
}

module.exports = config;