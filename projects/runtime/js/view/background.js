var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
        window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof ground.y === 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var treeM1;
        var buildings = [];
        var housem1;
        var treemm1;
        var treemm2;
        var treemm3;
        var treemm4;
        var buildingsmm1;
        var buildingsmm1b;
        var groundmm1;
        var groundArr = [];
        var poni1;
        
        
          // called at the start of game and whenever the page is resized
           // add objects for display in background. draws each image added to the background once
            function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFillB = draw.rect(canvasWidth, canvasHeight,'#2F4832');
            background.addChild(backgroundFillB);
            
            var backgroundFill = draw.rect(canvasWidth, groundY,'#447272');
            background.addChild(backgroundFill);
            
                       
            
              // TODO: 3 - Add a moon and starfield
            
                var circle;
                for(var i=0;i<300;i++) {
                circle = draw.circle(2,'LightGray','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random() -20;
                background.addChild(circle);
                }
             
            
            
            
            
            
            var shapeA = draw.bitmap('img/moon.png');
            shapeA.x = canvasWidth -200;
            shapeA.y = -50;
            shapeA.scaleX = 0.5;
            shapeA.scaleY = 0.5;
            background.addChild(shapeA);
            
            
            
             // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
//            var buildingHeight = 200;
//            var building;
//            for(var i=0;i<8;++i) {
//            building = draw.rect(75,buildingHeight,'LightGreen','DarkGreen',5);
//            building.x = 200*i;
//            building.y = groundY-buildingHeight -2;
//            background.addChild(building);
//            buildings.push(building);
//            }
            
                      // TODO Marvin, Add my Own
                    
                      for (var i = 0; i < 10; i++){
                      groundmm1 = draw.bitmap('img/groundmm2.png');
                      groundmm1.x = 240 * i;
                      groundmm1.y = groundY;
                      background.addChild(groundmm1);
                      groundArr.push(groundmm1);
                      }
                        
//           while(groundmm1.x < canvasWidth){
//           groundmm1 = draw.bitmap('img/groundmm2.png');
//           groundmm1.x = groundmm1.x +242;
//           groundmm1.y = groundY;
//           background.addChild(groundmm1);
//                        }
////                        
            
                        
                        
            buildingsmm1 = draw.bitmap('img/buildingsmm1.png');
            buildingsmm1.x = 0;
            buildingsmm1.y = groundY -293;
            background.addChild(buildingsmm1);
                        
            buildingsmm1b = draw.bitmap('img/buildingsmm1.png');
            buildingsmm1b.x = 2632;
            buildingsmm1b.y = groundY -293;
            background.addChild(buildingsmm1b);
                        
                        
                        
            treemm1 = draw.bitmap('img/treemm1.png');
            treemm1.x = canvasWidth -1400;
            treemm1.y = groundY -250
            background.addChild(treemm1);
            
            treemm2 = draw.bitmap('img/treemm2.png');
            treemm2.x = canvasWidth -950;
            treemm2.y = groundY -250;
            background.addChild(treemm2);
            
            treemm3 = draw.bitmap('img/treemm3.png');
            treemm3.x = canvasWidth -100;
            treemm3.y = groundY -250;
            background.addChild(treemm3);
            
            treemm4 = draw.bitmap('img/treemm4.png');
            treemm4.x = canvasWidth -300;
            treemm4.y = groundY -2500;
            background.addChild(treemm4);
            
            
            // TODO 4: Part 1 - Add a tree
            
            treeM1 = draw.bitmap('img/treeM1.png');
            treeM1.x = canvasWidth -790;
            treeM1.y = groundY -215;
            background.addChild(treeM1);
            
            poni1 = draw.bitmap('img/poni2.png');
            poni1.x = 1150;
            poni1.y = groundY -84;
            poni1.scaleX = 0.05;
            poni1.scaleY = 0.05;
            background.addChild(poni1);
            
           }// end of render function - DO NOT DELETE
        
        
            // Perform background animation
            // called on each timer "tick" - 60 times per second
        
            function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            
           // TODO Marvin, Add my Own//                      
            buildingsmm1.x = buildingsmm1.x -0.1;
            if(buildingsmm1.x < -2632)
            {buildingsmm1.x = buildingsmm1b.x +2615;
            }
                        
             buildingsmm1b.x = buildingsmm1b.x -0.1;
             if(buildingsmm1b.x < -2632){
             buildingsmm1b.x = buildingsmm1.x +2615;
                        }
                        
        
             if(poni1.x > -250) {poni1.x = poni1.x -0.5;}

                        
                        
            treemm1.x = treemm1.x -0.5;
            if(treemm1.x < -350) {treemm1.x = canvasWidth;}
            
            treemm2.x = treemm2.x -0.5;
            if(treemm2.x < -350) {treemm2.x = canvasWidth;}
            
            treemm3.x = treemm3.x -0.5;
            if(treemm3.x < -350) {treemm3.x = canvasWidth;}
            
            treemm4.x = treemm4.x -0.5;
            if(treemm4.x < -350) {treemm4.x = canvasWidth;}
            
            
            // TODO 4: Part 2 - Move the tree!
            treeM1.x = treeM1.x -0.5;
            if(treeM1.x < -350) {treeM1.x = canvasWidth;}
            
            
            // TODO 5: Part 2 - Parallax
            
//           for(var i = 0; i < buildings.length; i++) {
//           buildings[i].x = buildings[i].x - 1;
//           if(buildings[i].x < -200) {
//           buildings[i].x = canvasWidth;
//          }
//           }
           
           
           
}

               // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
