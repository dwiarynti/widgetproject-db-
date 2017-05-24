angular.module('app').controller('appcomposercontroller',
    ['$scope','widgetResource',
        function ($scope, widgetResource) {
            var widgetresource = new widgetResource();
            $scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: false,
                swapping: false
            };
            $scope.widgetDefinitions = [
                {
                    title: 'Temperature',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000,
                            templateUrl: '/javascripts/app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Inventory',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-inventory></wwa-inventory>',
                        widgetSettings: {
                            id: 1002,
                            templateUrl: '/javascripts/app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Employee',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-employee></wwa-employee>',
                        widgetSettings: {
                            id: 5000,
                            templateUrl: '/javascripts/app/dialogs/wwaSelectEmployeeTemplate.html',
                            controller: 'wwaSelectEmployeeController'
                        }
                    }
                },
                {
                    title: 'Location',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<mvplocation></mvplocation>',
                        widgetSettings: {
                            id: 5003,
                            templateUrl: '/javascripts/angularproject/dialog/mvp-location/mvp-location-dialog.html',
                            controller: 'mvp-locationdialogcontroller'
                        }
                    }
                },
                {
                    title: 'Person',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<mvpperson></mvpperson>',
                        widgetSettings: {
                            id: 5003,
                            selectedfilter :"",
                            templateUrl: '/javascripts/angularproject/dialog/mvp-person/mvp-person-dialog.html',
                            controller: 'mvp-persondialogcontroller'
                        }
                    }
                }
            ];
            $scope.widgets = [];

            widgetresource.$getAll({}, function (data) {
                $scope.widgets = data.obj.obj;
            });

            $scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
                $scope.widgets.push(newWidget);
            }
            
            $scope.$watch('widgets', function () {
                if ($scope.widgets.length > 0) {
                    widgetresource.obj = $scope.widgets;
                    console.log($scope.widgets);
                    widgetresource.$add().then(function (data) {

                        if (data.success) {
                            console.log('widget saved');
                        }
                        else {

                        }
                    });
                }
                
            }, true);

        }]);