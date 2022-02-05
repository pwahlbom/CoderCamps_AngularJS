namespace nspFortuneCookie {
    // Angular Module
    angular.module("modFortuneCookie", []);

    // Class that will be added as a controller
    class clsFortuneCookie {

        constructor(public RandomFortune: nspFortuneCookie.Services.clsRandomMessage) {
        }; 

        // public field that will be exposed to the view
        public aryFortune = [
            "It is decidedly so.",
            "Without a doubt.",
            "You may rely on it.",
            "Outlook good."
        ];

        //Test
        public strFortune: string = this.RandomFortune.randomFortuneMessage(this.aryFortune);

    };

    // Add class to the controller while naming it homeController
    angular.module("modFortuneCookie").controller("homeController", clsFortuneCookie);

};

namespace nspFortuneCookie.Services {

    export class clsRandomMessage {
        randomFortuneMessage(aryFortunes: string[]) {
            let nbrRandomNumber = Math.floor(Math.random() * aryFortunes.length);
            return aryFortunes[nbrRandomNumber];
        };
    }

    angular.module('modFortuneCookie').service('RandomFortune', clsRandomMessage);
}