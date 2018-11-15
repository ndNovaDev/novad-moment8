var reg = /\d{4}(-\d{2}){2}T\d{2}(:\d{2}){2}\.\d{3}\+\d{4}/

module.exports = function (str) {
    var parseStr
    if (reg.test(str)) {
        parseStr = str.slice(0, -2) + ':' + str.slice(-2)
    } else {
        parseStr = str
    }
    return new Date(parseStr)
}