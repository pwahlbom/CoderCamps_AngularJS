namespace nspToDo {
    // Angular Module
    angular.module("modToDo", []);

    // Class that will be added as a controller
    class clsToDo {

        // public fields that will be exposed to the view
        public aryToDo = ["wake", "work", "eat", "sleep", "repeat"];

        public mthAddToDo(strToDo) {
            this.aryToDo.push(strToDo);
        };

    };

    // Add class to the controller while naming it homeController
    angular.module("modToDo").controller("homeController", clsToDo);

};