angular.module('app').controller('appcomposercontroller',
    ['$scope', '$window', '$location','widgetResource', 'passingdataservice', 'appmanagementResource',
        function ($scope, $window, $location, widgetResource, passingdataservice, appmanagementResource) {
            $scope.appmanagementobj={};
            var widgetresource = new widgetResource();
            var appmanagementresource = new appmanagementResource();

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
                            selectedfilter:{by:"", option:""},
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

            $scope.init = function(){
                console.log(passingdataservice.appmanagementobj);
                if(passingdataservice.appmanagementobj != undefined){
                    $scope.appmanagementobj = passingdataservice.appmanagementobj;
                    angular.forEach($scope.appmanagementobj.widget, function (item) {
                        item.widgetSettings.viewmode = false;
                    });
                    $scope.$parent.widgets = $scope.appmanagementobj.widget;
                }else{
                    $location.path('appmanagement');
                }

            }

            $scope.init();
            


            $scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
                $scope.appmanagementobj.widget.push(newWidget);
            }

            $scope.Save = function(){
                appmanagementresource.pagename = $scope.appmanagementobj.pagename;
                appmanagementresource.pagestatus = $scope.appmanagementobj.pagestatus;
                appmanagementresource.widget = $scope.appmanagementobj.widget;
                console.log(appmanagementresource);
                appmanagementresource.$create(function(data){
                    $window.alert("Data saved successfully");
                    console.log(data);
                });

            }

            $scope.Update = function(){
                appmanagementresource.id = $scope.appmanagementobj.id;
                appmanagementresource.pagename = $scope.appmanagementobj.pagename;
                appmanagementresource.pagestatus = $scope.appmanagementobj.pagestatus;
                appmanagementresource.widget = $scope.appmanagementobj.widget;
                appmanagementresource.$update(function(data){
                    $window.alert("Data saved successfully");
                    console.log(data);
                });
            }
            
            $scope.ViewPage = function(){
                $location.path('prevpage/'+$scope.appmanagementobj.id);
            }

        }]);