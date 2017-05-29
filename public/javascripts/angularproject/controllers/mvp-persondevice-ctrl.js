angular.module('app').controller('mpv-persondevicecontroller',
    ['$scope','persondeviceResource',
        function ($scope, persondeviceResource) {
            $scope.persondeviceList = [];
            var persondeviceresource = new persondeviceResource();
            var siteid = "001";
            $scope.$watch(function () {
                return $scope.$parent.item.widgetSettings.selectedfilter;
            }, function () {
                console.log($scope.$parent.item.widgetSettings.selectedfilter);
                var selectedfilter = $scope.$parent.item.widgetSettings.selectedfilter;
                persondeviceresource.devicename = selectedfilter != ""?selectedfilter:null;
                persondeviceresource.$filter({_id:siteid}, function(data){
                    console.log(data.obj);
                    $scope.persondeviceList = data.obj;
                });
            });

        }
    ]);