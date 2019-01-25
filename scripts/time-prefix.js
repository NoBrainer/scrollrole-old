#!/usr/bin/env node
'use strict';

const now = new Date();
let timestamp = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());

function pad(num) {
    return num > 9 ? ""+num : "0"+num;
}

module.exports = "["+timestamp+"] ";