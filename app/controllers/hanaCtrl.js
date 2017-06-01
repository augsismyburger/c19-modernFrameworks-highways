'use strict';

app.controller('hanaCtrl', function($scope, routeGetter) {

    routeGetter.getRoute()
    .then((data) => {
        $scope.hanaRoute = data.data["Hana Highway"];
        $scope.hanaTitle = "Hana Highway";
    });
});