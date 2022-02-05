namespace nspAdditionCalculator {
    // Angular Module
    angular.module("modAdditionCalculator", []);

    // Class that will be added as a controller
    class clsAdditionCalculator {

        // public fields that will be exposed to the view
        public nbrNumber1;
        public nbrNumber2;
        public nbrSum;

        public calculate() {
            this.nbrSum = parseInt(this.nbrNumber1) + parseInt(this.nbrNumber2);
        };
    };

    // Add class to the controller while naming it homeController
    angular.module("modAdditionCalculator").controller("homeController", clsAdditionCalculator);


};