'use strict';

module.exports = function parse(options) {
    if (typeof options === 'string') {
        return {
            overrideBrowserslist: options.replace(/\s*,\s*/g, ',').split(','),
        };
    }

    return options;
};
