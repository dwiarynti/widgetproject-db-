angular.module('app').controller('mpv-devicecontroller',
    ['$scope','deviceResource',
        function ($scope, deviceResource) {
            $scope.deviceList = [];
            var deviceresource = new deviceResource();
            var siteid = "001";
            deviceresource.$init({_id:siteid}, function(data){
                // console.log(data.obj);
                $scope.deviceList = data.obj;
            });
        }
    ]);