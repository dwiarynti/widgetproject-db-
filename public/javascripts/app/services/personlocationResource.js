(function () {
    "use strict";
    angular.module('app').factory('personlocationResource',
    ["$resource", personlocationResource]);

    function personlocationResource($resource) {
        return $resource("/api/personlocation/:action/:_id",
               { _id: '@_id' },
               {
                 init: {method:'GET', params:{action:'getbysite'}}
               });
    }
}());