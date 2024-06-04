const PRINT_TYPE = {
    MSG:"msg",
    DEBUG:"debug"
}
const IS_DEBUG = true;
function Print(TYPE, ...args) {
    if (TYPE == PRINT_TYPE.DEBUG) {
        if (IS_DEBUG != true) return;
        return console.log(...args)
    }
    console.log(...args)
}

module.exports = {
    Print,
    PRINT_TYPE
}