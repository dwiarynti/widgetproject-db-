angular.module('app').controller('mpv-locationcontroller',
    ['$scope', 'locationsiteResource',
        function ($scope, locationsiteResource) {
            $scope.LocationList = [];
            console.log($scope);
            var locationsiteresource = new locationsiteResource();
            $scope.getAllLocationSite = function(){
                locationsiteresource.$init({_id:siteid}, function(data){
                    $scope.LocationList = data.obj;
                });
            }

            $scope.getFilteredLocationSite = function(){
                locationsiteresource.locationname = selectedfilter.by == "Location"? selectedfilter.option : null;
                locationsiteresource.zone = selectedfilter.by == "Zone" ? selectedfilter.option : null;
                locationsiteresource.$filter({_id:siteid}, function(data){
                    $scope.LocationList = data.obj;
                });
            }
            

            var siteid = "001";
            var selectedfilter = $scope.$parent.item.widgetSettings.selectedfilter;
            if(selectedfilter.by != "" && selectedfilter.option != ""){
                $scope.getFilteredLocationSite();
            }else{
                $scope.getAllLocationSite();
            }




        }
    ]);