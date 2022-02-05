var nspToDo;
(function (nspToDo) {
    // Angular Module
    angular.module("modToDo", []);
    // Class that will be added as a controller
    var clsToDo = (function () {
        function clsToDo() {
            // public fields that will be exposed to the view
            this.aryToDo = ["wake", "work", "eat", "sleep", "repeat"];
        }
        clsToDo.prototype.mthAddToDo = function (strToDo) {
            this.aryToDo.push(strToDo);
        };
        ;
        return clsToDo;
    }());
    ;
    // Add class to the controller while naming it homeController
    angular.module("modToDo").controller("homeController", clsToDo);
})(nspToDo || (nspToDo = {}));
;
//# sourceMappingURL=ToDo.js.map