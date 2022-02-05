var nspAdditionCalculator;
(function (nspAdditionCalculator) {
    // Angular Module
    angular.module("modAdditionCalculator", []);
    // Class that will be added as a controller
    var clsAdditionCalculator = (function () {
        function clsAdditionCalculator() {
        }
        clsAdditionCalculator.prototype.calculate = function () {
            this.nbrSum = parseInt(this.nbrNumber1) + parseInt(this.nbrNumber2);
        };
        ;
        return clsAdditionCalculator;
    }());
    ;
    // Add class to the controller while naming it homeController
    angular.module("modAdditionCalculator").controller("homeController", clsAdditionCalculator);
})(nspAdditionCalculator || (nspAdditionCalculator = {}));
;
//# sourceMappingURL=AdditionCalculator.js.map