module.exports = function (options) {
    return require(`./modules${options.env === 'dev' ? '.dev' : ''}.js`);
};
