angular.module('app').controller('mpv-locationcontroller',
    ['$scope',
        function ($scope) {
            $scope.LocationList = [
                {"id":1, "Location":"a-1", "Site":"a", "Zone":"Z001"},
                {"id":2, "Location":"b-2", "Site":"b", "Zone":"Z002"},
                {"id":3, "Location":"c-3", "Site":"c", "Zone":"Z003"},
                {"id":4, "Location":"d-3", "Site":"d", "Zone":"Z004"},
            ];

        }
    ]);