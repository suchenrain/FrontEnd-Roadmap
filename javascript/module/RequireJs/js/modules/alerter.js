define([
    'dataService',
    'jquery'
], function (dataService, $) {
    let name = 'Chen'
    function showMsg() {
        alert(dataService.getMsg() + ', ' + name)
    }
    $('body').css('background', 'blue')
    return { showMsg }

});