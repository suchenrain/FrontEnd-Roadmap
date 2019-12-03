(function (window) {
    let msg = 'www.google.com'
    function getMsg() {
        return msg.toUpperCase()
    }
    window.dataService = { getMsg }
})(window)