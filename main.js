import k from "./kaboom.js";
import Animation from "./animation.js";

const zombie = {x : 0, y : 40, animation : "appear", frame : 1 }

//The Queue of the zombie customers waiting to be served
const zombieCustomers = [];

const sprites = {"appear" : 11, "die" : 8, "drink": 7, "idle" : 6, "walk": 10}


// initialize kaboom context

k.loadSprite("zombie", './assets/appearSpriteSheet.png', {
    sliceX: 220,
    sliceY: 288, 
    anims: {
        appear: { from: 1, to: 11}
    }
});

k.loadSprite("zombieIdle", './assets/idleSpriteSheet.png', {
    sliceX: 200,
    sliceY: 308, 
    anims: {
        idle: { from: 1, to: 6}
    }
});

k.scene('animation', Animation);
// k.add([
// 	// list of components
// 	sprite("zombie"),
// 	pos(80, 40),
// 	area(),
// ])

k.add([
    k.sprite('zombieIdle', {
        animSpeed: 0.1,
        frame: 1
    }),
    k.pos(20, 100),
])

k.scene('main', ()=>{
    k.go('animation');
})

console.log("oh noes");
