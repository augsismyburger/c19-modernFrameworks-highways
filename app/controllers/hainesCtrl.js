'use strict';

app.controller('hainesCtrl', function($scope, routeGetter) {
    
    routeGetter.getRoute()
    .then((data) => {
        console.log(data);
        $scope.hainesRoute = data.data["Haines Highway"];
        $scope.hainesTitle = "Haines Highway";
    });
});