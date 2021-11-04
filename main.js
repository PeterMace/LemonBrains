import k from "./kaboom.js";
import Animation from "./animation.js";

const zombie = {x : 0, y : 40, animation : "appear", frame : 1 }

//The Queue of the zombie customers waiting to be served
const zombieCustomers = [];

const sprites = {"appear" : 11, "die" : 8, "drink": 7, "idle" : 6, "walk": 10}


// initialize kaboom context

k.loadSprite("zombie", './assets/appearSpriteSheet.png', {
    sliceX: 11,
    sliceY: 1, 
    anims: {
        appear: { from: 1, to: 11}
    }
});

k.loadSprite("zombieIdle", './assets/idleSpriteSheet.png', {
    sliceX: 6, 
    sliceY: 1, 
    anims: {
        idle: { from: 1, to: 6}
    }
});

k.scene('animation', Animation);
k.scene('main', ()=>{
    console.log("go")
    k.go('animation');
    console.log("go")
})

k.go('main')

const zombie = k.add([
    k.sprite('zombie', {
        animSpeed: 0.1,
        frame: 1
    }),
    k.pos(k.width() * 0.5, k.height() * 0.5),
    k.origin('center'),
    k.scale(1)
])
zombie.play("appear");
// k.add([
// 	// list of components
// 	sprite("zombie"),
// 	pos(80, 40),
// 	area(),
// ])
// const idlezombie = k.sprite('zombieIdle', {
//     animSpeed: 0.1,
//     frame: 1
// })
// k.add([
//     idlezombie,
//     k.pos(20, 100),
//     k.area()
// ])



// console.log("oh noes", idlezombie);
