(function() {

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(function($routeProvider) {

        $routeProvider.when("/day", {
            templateUrl: "day/day.html"
        })

                    .when("/night", {
            templateUrl: "night/night.html"
        })
                    .otherwise({
            template: "You messed up!"
        })
    });
})();
    