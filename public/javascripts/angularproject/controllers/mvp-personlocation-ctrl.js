angular.module('app').controller('mpv-personlocationcontroller',
    ['$scope','personlocationResource',
        function ($scope, personlocationResource) {
            $scope.personlocationList = [];
            var personlocationresource = new personlocationResource();
            var siteid = "001";
            // personlocationresource.$init({_id:siteid}, function(data){
            //     console.log(data.obj);
            //     $scope.personlocationList = data.obj;
            // });
        }
    ]);