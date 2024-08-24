'use strict';
const path = require('path');
const { title } = require('process');
let env;
switch (process.env.CONFIG_ENV) {
    case 'local':
        env = require('../config/local.env');
        break;
    case 'dev':
        env = require('../config/dev.env');
        break;
    case 'stage':
        env = require('../config/dev.env');
        break;
    case 'pro':
        env = require('../config/prod.env');
        break;
    default:
        break;
}

module.exports = {
    shouldAnalyzerBundle: false,
    shouldSplitChunks: false,
    shouldGzipResource: false,
    htmlWebpackConfig: {
        title: '报告',
    },
};
