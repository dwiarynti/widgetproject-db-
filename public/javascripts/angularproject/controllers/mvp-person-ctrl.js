angular.module('app').controller('mpv-personcontroller',
    ['$scope', 'personResource',
        function ($scope, personResource) {
            $scope.personList = [];
            var personresource = new personResource();
            var siteid = "001";
            personresource.$init({_id:siteid}, function(data){
                $scope.personList = data.obj;
                // console.log($scope.personList);                
            });
        }
    ]);