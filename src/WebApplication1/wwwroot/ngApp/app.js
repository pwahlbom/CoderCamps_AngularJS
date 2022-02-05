var App1;
(function (App1) {
    angular.module("MyApp", []);
    angular.module("MyApp").constant("CarServiceURL", "/api/cars");
    var HomeController = (function () {
        function HomeController($http, CarServiceURL) {
            var _this = this;
            this.$http = $http;
            this.CarServiceURL = CarServiceURL;
            this.message = "Hello Angular!";
            this.cars = [
                { make: "Tesla", model: "model S" },
                { make: "BMW", model: "500" },
                { make: "Ford", model: "Explorer" }
            ];
            console.log(CarServiceURL);
            this.$http.get(CarServiceURL).then(function (response) {
                _this.cars = response.data;
            });
        }
        ;
        HomeController.prototype.faveColor = function (strColor) {
            alert("click");
            this.color = strColor;
            this.style = { 'backgroundColor': this.color };
        };
        ;
        HomeController.prototype.addCar = function (car) {
            this.cars.push({ make: car.make, model: car.model });
        };
        ;
        return HomeController;
    }());
    ;
    angular.module("MyApp").controller("homeController", HomeController);
})(App1 || (App1 = {}));
;
//# sourceMappingURL=app.js.map