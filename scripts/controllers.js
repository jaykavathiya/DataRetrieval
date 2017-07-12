/**
 * Created by Jay on 7/12/2017.
 */
(function(){
    angular.module('App')
        .controller('DataController', ['$scope','DataCollectorService',function($scope,DataCollectorService) {
            var vm = this;
            var promise = DataCollectorService.getData();
            promise.then(function(data){
                vm.displayData = data.data;
            });
        }]);
})();