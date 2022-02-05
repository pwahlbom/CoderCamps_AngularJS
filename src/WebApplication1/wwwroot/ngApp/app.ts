namespace App1 {
    angular.module("MyApp", []);
    angular.module("MyApp").constant("CarServiceURL", "/api/cars");

    class HomeController {
        public message: string = "Hello Angular!";
        public cars;
        public color: string;
        public style;

        constructor(public $http: ng.IHttpService, public CarServiceURL) {
            this.cars = [
                { make: "Tesla", model: "model S" },
                { make: "BMW", model: "500" },
                { make: "Ford", model: "Explorer" }
            ];
            console.log(CarServiceURL);
            this.$http.get(CarServiceURL).then((response) => {
                this.cars = response.data;
            });
        };

        public faveColor(strColor) {
            alert("click");
            this.color = strColor;
            this.style = { 'backgroundColor': this.color };
        };

        public addCar(car) {
            this.cars.push({ make: car.make, model: car.model });
        };
    };

    angular.module("MyApp").controller("homeController", HomeController);

};