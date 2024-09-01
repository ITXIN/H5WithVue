// 自定义导出的配置信息
const hostName = {
    dev: '',
    fat: '',
    uat: '',
    prd: '',
};
module.exports = function (options) {
    const env = options.env,
        URL = hostName[env];
    return {
        url: {
            common: URL,
        },
        // 基础文件url
        libs: {
            vue: {
                // url: 'https://cdn.jsdelivr.net/npm/vue@2',
                url: 'https://test-cdn-fat.pingan.com.cn/omm/libs/v1.0.0/js/common/common.min.js',
            },
            others: {
                url: 'xxx',
            },
            console: {
                url: 'https://cdn.jsdelivr.net/npm/vconsole@3',
            },
            bridge: {
                url: '../src/utils/jsbridge/index.js',
            },
        },
    };
};
