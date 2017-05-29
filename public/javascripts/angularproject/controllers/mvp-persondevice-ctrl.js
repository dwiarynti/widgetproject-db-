angular.module('app').controller('mpv-persondevicecontroller',
    ['$scope','persondeviceResource',
        function ($scope, persondeviceResource) {
            $scope.persondeviceList = [];
            var persondeviceresource = new persondeviceResource();
            var siteid = "001";
            persondeviceresource.$init({_id:siteid}, function(data){
                console.log(data.obj);
                $scope.persondeviceList = data.obj;
            });
        }
    ]);