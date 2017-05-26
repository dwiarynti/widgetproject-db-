(function () {
    "use strict";
    angular.module('app').factory('personResource',
    ["$resource", personResource]);

    function personResource($resource) {
        return $resource("/api/person/:action/:_id",
               { _id: '@_id' },
               {
                 init: {method:'GET', params:{action:'getbysite'}}
               })
    }
}());