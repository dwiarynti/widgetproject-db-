angular.module('app').controller('mpv-locationcontroller',
    ['$scope', 'locationsiteResource',
        function ($scope, locationsiteResource) {
            $scope.LocationList = [];
            var locationsiteresource = new locationsiteResource();
            var siteid = "001";
            locationsiteresource.$init({_id:siteid}, function(data){

                $scope.LocationList = data.obj;
            });

        }
    ]);