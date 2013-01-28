//set main namespace
goog.provide('TestField');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');



// entrypoint
TestField.start = function(){

	//tile 75 wys x 100 szer

	var startX = 25;
	var startY = 15;
	
	var director = new lime.Director(document.body,800,800);
	director.makeMobileWebAppCapable();
	director.setDisplayFPS(true);
	var mapScene = new lime.Scene();
	var mapLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
	var hero = new lime.Sprite().setSize(60,70).setFill('hero.png').setPosition(startX,startY).setAnchorPoint(0,0);
	var gameMap = new lime.Sprite().setSize(800,800).setFill('blank-chess-board.gif').setPosition(0,0).setAnchorPoint(0,0);
	
	//MOVEMENT
	goog.events.listen(gameMap, ['mousedown', 'touchstart'], function(e) {

		if (e.position.x < 100) {landingPosX =25;}
		else {
		landingPosX = parseInt(e.position.x.toString()[0]) * 100 + 25;
		}
		if (e.position.y <100) {landingPosY =15;}
		else {
		landingPosY = parseInt(e.position.y.toString()[0]) * 100 + 15;
		}
	
	    var movement = new lime.animation.MoveTo(landingPosX,landingPosY).setDuration(0.5);        
    hero.runAction(movement); 
	
	});
	
	
	
	mapLayer.appendChild(gameMap);
	mapLayer.appendChild(hero);
	mapScene.appendChild(mapLayer);

	// set current scene active
	director.replaceScene(mapScene);

	
	
}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('TestField.start', TestField.start);
