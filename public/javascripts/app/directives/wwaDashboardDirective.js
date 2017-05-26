"use strict";

angular.module('app').directive('wwaDashboard', ['$localStorage', 'widgetResource', 'dataService',
    function ($localStorage, widgetResource, dataService) {
    return {
        scope: {
        },
        template: '<ps-dashboard></ps-dashboard>',
        link: function (scope) {

            scope.title = 'My First Dashboard';
            var widgetresource = new widgetResource();

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: false,
                swapping: false
            };

            scope.widgetDefinitions = [];
            dataService.getWidgetDefinition().then(function(data){
                console.log(data);
                scope.widgetDefinitions = data;
            });
            
            scope.widgets = [];

            init();

            function init()
            {
                widgetresource.$getAll({}, function (data) {
                    // console.log('widget loaded', data);
                    scope.widgets = data.obj.obj;

                });
            }

            scope.$watch('widgets', function () {
                // console.log('scope.widgets',scope.widgets);
                if (scope.widgets.length > 0) {
                    widgetresource.obj = scope.widgets;
                    widgetresource.$add().then(function (data) {

                        if (data.success) {
                            // console.log('widget saved');
                        }
                        else {

                        }
                    });
                }
                
            }, true);
        }
    }
}]);