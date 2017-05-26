angular.module('app').controller('prewpagecontroller',
    ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            console.log($routeParams.id);

        }])