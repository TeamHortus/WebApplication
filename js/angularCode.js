var app = angular.module('mainApp', []);

app.controller('myCtrl', function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://teamhortus.herokuapp.com/data"
    }).then(function mySuccess(response) {
        $scope.configurations = response.data[0];
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});

app.controller('editCtrl', function ($scope, $http) {
    $scope.configuration = {};
    $scope.results = [];

    $scope.updateConfigurations = function () {
        $http({
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param($scope.configuration),
            url : "http://teamhortus.herokuapp.com/data"
        }).then(function mySuccess(response) {
            $scope.results = response.data;
            location.reload(); 
        }, function myError(response) {
            console.log('Error at ' + response.statusText);
        });
    }
});





