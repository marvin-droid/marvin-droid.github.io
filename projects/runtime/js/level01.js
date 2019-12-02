var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        
        
        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade ',x:900,y:groundY -100},
                {type: 'punta',x:1100,y:groundY},
                {type: 'punta',x:1250,y:groundY}
                ]
        };
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x,y) {
    // your code goes here
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        
       myObstacle.x = x;
       myObstacle.y = y;
        
        game.addGameItem(myObstacle);
    
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
}
function createPunta(x,y) {
    //  var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        
       myObstacle.x = x;
       myObstacle.y = y; var hitZoneSize = 25;
       var damageFromObstacle = 10;
       var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        
       myObstacle.x = x;
       myObstacle.y = y;
       
       game.addGameItem(myObstacle);
    
        var obstacleImage = draw.bitmap('img/punta.png');
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
       
       
}


for(var i= 0; i < levelData.gameItems.length; i++){
    var gameItem = levelData.gameItems[i];
    if(gameItem.type === 'punta'){
        createPunta(gameItem.x, gameItem.y);
    }else{
        createSawBlade(gameItem.x,gameItem.y);
    }
}

            //stepp 11 and 12 is this
//function enemy(x, y){
//    var enemy = game.createGameItem('enemy',25);
//var redSquare = draw.rect(50,50,'red');
//redSquare.x = -25;
//redSquare.y = -25;
//enemy.addChild(redSquare);
//
//enemy.x = x;
//enemy.y = y;
//
//game.addGameItem(enemy);
//
//enemy.velocityX = -1;
//
//if(enemy.x < -100){ 
//    enemy.x = canvasWidth;
//    }
//    enemy.onPlayerCollision = function(){
//    console.log('The enemy has hit Halle');
//    game.changeIntegrity(-10)
//    };
//enemy.onProjectileCollision = function (){
//    enemy.fadeOut();
//    }
//};
//
//enemy(1000, groundY -50);

function createEnemy(x, y) {
    // all code from 11 and 12
    function enemy(x, y){
    var enemy = game.createGameItem('enemy',50);
    var redSquare = draw.bitmap('img/enemy1.png');
    redSquare.x = -50;
    redSquare.y = -180;
    enemy.addChild(redSquare);
    
   redSquare.scaleX = 0.6;
   redSquare.scaleY = 0.6;

enemy.x = x;
enemy.y = y;

game.addGameItem(enemy);



enemy.velocityX = -1;
    
    enemy.onPlayerCollision = function(){
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-5)
    };
    enemy.onProjectileCollision = function (){
        enemy.fadeOut();
        createEnemy(2300, groundY -50);
    }
 };
enemy(1200, groundY -50);

}
createEnemy();




//////////////////////////////////////
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}