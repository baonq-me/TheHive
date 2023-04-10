(function() {
    'use strict';
    angular.module('theHiveDirectives')
        .directive('pageSizer', function() {
            return {
                restrict: 'E',
                templateUrl: 'views/directives/page-sizer.html',
                scope: {
                    collection: '=',
                    sizes: '=?',
                    cls: '@?'
                },
                link: function(scope) {
                    if (!scope.sizes) {
                        scope.sizes = [10, 30, 100, 1000, 3000, 6000, 9000, 9990];
                    }
                }
            };
        });
})();
