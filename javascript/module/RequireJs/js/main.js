(function () {
    require.config({
        baseUrl: 'js/',
        paths: {
            alerter: './modules/alerter',
            dataService: './modules/dataService',
            jquery: './libs/jquery-3.4.1.min'
        }
    })
    require(['alerter'], function (alerter) {
        alerter.showMsg();
    })
})()