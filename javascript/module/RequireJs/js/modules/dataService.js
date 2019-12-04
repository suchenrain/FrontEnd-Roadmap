define(function () {
    let msg = 'www.google.com'
    function getMsg() {
        return msg.toUpperCase()
    }
    return { getMsg }
});