/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var UglifyJS = require('uglify-js');

module.exports = function (content, file, conf) {
    conf.fromString = true;
    var code = UglifyJS.minify(content, conf).code;
    return file.isHbsFile ? code.substring(0, code.lastIndexOf(";")) : code;
};