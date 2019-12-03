(function (window, dataService) {
    let name = 'Jim'
    function showMsg() {
        alert(dataService.getMsg() + ',' + name)
    }
    window.alerter = { showMsg }
})(window, dataService)