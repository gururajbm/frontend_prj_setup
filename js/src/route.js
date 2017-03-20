function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    IdleProvider.idle(5);
    IdleProvider.timeout(120);

     $urlRouterProvider.otherwise("/app/dashboard");

    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
        .state('dashboards', {
            abstract: true,
            url: "/app",
            templateUrl: "/js/src/common/view/content.html",
        })
        .state('dashboards.dashboard', {
            url: "/dashboard",
            templateUrl: "/js/src/dashboard/view/dashboard.html",
        })
}
angular
    .module('myproject')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });