app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/views/board/board.html"
    }).when("/create", {
        templateUrl: "/views/create/create.html"
    });
});