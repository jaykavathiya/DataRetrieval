/**
 * Created by Jay on 7/12/2017.
 */
(function () {
    angular.module('App')
        .service("DataCollectorService",function($http, $q){
            var deferred = $q.defer();
            $http.get("data.json").then(function(data){
                deferred.resolve(data);
            });
            this.getData = function()
            {
                return deferred.promise;
            }
        });
})();