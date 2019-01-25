#!/usr/bin/env node
'use strict';

const ps = require('ps-node');

let query = { command: 'nodejs' };
ps.lookup(query, (err, resultList) => {
    if (err) throw new Error(err);
    resultList.forEach(killProcess);
});

function killProcess(process) {
    if (!process) return;
    ps.kill(process.pid, ()=>{});
}