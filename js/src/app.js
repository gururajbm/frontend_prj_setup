(function () {
    angular.module('myproject', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize'                    // ngSanitize
    ])
    .config(['$httpProvider', function($httpProvider) {

        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        $httpProvider.defaults.headers.get['Cache-Control']     = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma']            = 'no-cache';

        $httpProvider.interceptors.push([
            '$rootScope',
            '$q',
            function($rootScope, $q) {
                return {
                    'request': function(config) {
                        config.headers = config.headers || {};
                        return config;
                    },
                    'responseError': function(response) {
                        return $q.reject(response);
                    },
                    'response': function(response) {
                        return response;
                    }
                };
            }
        ]);
    }]);
})();