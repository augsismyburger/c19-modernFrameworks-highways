'use strict';

app.factory('routeGetter', ($q, $http) => {

    let getRoute = () => {

        return $q((resolve, reject) => {
            $http.get('https://practice-6d645.firebaseio.com/highways.json')
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    return {getRoute};
});