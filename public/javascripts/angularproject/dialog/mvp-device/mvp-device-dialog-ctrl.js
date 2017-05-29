"use strict";

angular.module('app').controller('mvp-devicedialogcontroller',
    ['$scope', 'dataService', 
    function ($scope, dataService) {

        
        var siteid = "001";
        // devicesiteresource.$distinct({_id:siteid}, function(data){
        //     // $scope.objmodel = data.obj;
        //     $scope.filteroptions = data.obj;
        //     console.log(data.obj);
        // });

        $scope.saveSettings = function () {
            $scope.item.widgetSettings.selectedfilter = $scope.selectedfilter;
            console.log($scope.item);
            // $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
            // $scope.$parent.selectedfilteroption = $scope.selectedfilteroption;
            $scope.$close();
        };
    }]);