import k from './kaboom.js';

export default function Animation(){
    const zombie = k.add([
        k.sprite('zombie', {
            animSpeed: 0.1,
            frame: 1
        }),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin('center'),
        k.scale(1)
    ])

    k.keyPress("left", () => {
        zombie.play("appear");
    })

    k.keyRelease('left', ()=>{

    })
}