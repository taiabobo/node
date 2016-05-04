exports.name = 'module_a\'s name';
exports.data = 'this is module_a\'s data';
var privateValue = 100;
exports.getPrivateValue = function () {
    return privateValue;
}