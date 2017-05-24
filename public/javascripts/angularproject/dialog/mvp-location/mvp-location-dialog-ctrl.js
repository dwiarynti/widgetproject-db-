"use strict";

angular.module('app').controller('mvp-locationdialogcontroller',
    ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.selectedfilterby = "";
        $scope.objmodel = {"FilterOption":[
            {"OptionName":"Zone"},
            {"OptionName":"Location"},
            {"OptionName":"Site"},
        ]};
        console.log($scope.selectedfilterby);
    }]);