(function () {
    "use strict";
    angular.module('app').factory('locationsiteResource',
    ["$resource", locationsiteResource]);

    function locationsiteResource($resource) {
        return $resource("/api/locationsite/:action/:_id",
               { _id: '@_id' },
               {
                 init: {method:'GET', params:{action:'getall'}}
               })
    }
}());