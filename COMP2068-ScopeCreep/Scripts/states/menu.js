/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/grass.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.instUp = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);
            var gameTitle = new objects.Label("Scope Creep", constants.SCREEN_CENTER_WIDTH, 100);
            gameTitle.font = "80px Consolas";
            gameTitle.regX = gameTitle.getMeasuredWidth() * 0.5;
            gameTitle.regY = gameTitle.getMeasuredHeight() * 0.5;
            this.game.addChild(gameTitle);
            this.playButton = new objects.Button("assets/images/playButton.png", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            this.instructionButton = new objects.Button("assets/images/instructionButton.png", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 100);
            this.game.addChild(this.instructionButton);
            this.instructionButton.on("click", this.instructionClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.instructionClicked = function () {
            alert("Click on the creeping creeps to kill them. Stave off your final deadline...with death.");
        };
        Menu.prototype.playButtonClicked = function () {
            this.game.removeChild(this.playButton);
            this.game.removeChild(this.instructionButton);
            this.easyButton = new objects.Button("assets/images/easyButton.png", constants.SCREEN_WIDTH * .25, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.easyButton);
            this.easyButton.on("click", this.easyDifficultyButtonClicked, this);
            this.normalButton = new objects.Button("assets/images/normalButton.png", constants.SCREEN_WIDTH * .50, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.normalButton);
            this.normalButton.on("click", this.normalDifficultyButtonClicked, this);
            this.hardButton = new objects.Button("assets/images/hardButton.png", constants.SCREEN_WIDTH * .75, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.hardButton);
            this.hardButton.on("click", this.hardDifficultyButtonClicked, this);
        };
        Menu.prototype.easyDifficultyButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 10;
            constants.ZOM_SPEED = .45;
            constants.ZOM_NUM = 5;
            constants.WIN_SCORE = 5;
        };
        Menu.prototype.normalDifficultyButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 5;
            constants.ZOM_SPEED = .75;
            constants.ZOM_NUM = 10;
            constants.WIN_SCORE = 10;
        };
        Menu.prototype.hardDifficultyButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 3;
            constants.ZOM_SPEED = 1;
            constants.ZOM_NUM = 15;
            constants.WIN_SCORE = 15;
        };
        // UPDATE METHOD
        Menu.prototype.update = function () {
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map