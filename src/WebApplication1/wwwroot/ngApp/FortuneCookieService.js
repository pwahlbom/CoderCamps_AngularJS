var nspFortuneCookie;
(function (nspFortuneCookie) {
    // Angular Module
    angular.module("modFortuneCookie", []);
    // Class that will be added as a controller
    var clsFortuneCookie = (function () {
        function clsFortuneCookie(RandomFortune) {
            this.RandomFortune = RandomFortune;
            // public field that will be exposed to the view
            this.aryFortune = [
                "It is decidedly so.",
                "Without a doubt.",
                "You may rely on it.",
                "Outlook good."
            ];
            //Test
            this.strFortune = this.RandomFortune.randomFortuneMessage(this.aryFortune);
        }
        ;
        return clsFortuneCookie;
    }());
    ;
    // Add class to the controller while naming it homeController
    angular.module("modFortuneCookie").controller("homeController", clsFortuneCookie);
})(nspFortuneCookie || (nspFortuneCookie = {}));
;
var nspFortuneCookie;
(function (nspFortuneCookie) {
    var Services;
    (function (Services) {
        var clsRandomMessage = (function () {
            function clsRandomMessage() {
            }
            clsRandomMessage.prototype.randomFortuneMessage = function (aryFortunes) {
                var nbrRandomNumber = Math.floor(Math.random() * aryFortunes.length);
                return aryFortunes[nbrRandomNumber];
            };
            ;
            return clsRandomMessage;
        }());
        Services.clsRandomMessage = clsRandomMessage;
        angular.module('modFortuneCookie').service('RandomFortune', clsRandomMessage);
    })(Services = nspFortuneCookie.Services || (nspFortuneCookie.Services = {}));
})(nspFortuneCookie || (nspFortuneCookie = {}));
//# sourceMappingURL=FortuneCookieService.js.map