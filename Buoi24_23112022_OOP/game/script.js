/**
 * Created by me on 23-Nov-2022
 */
const DISTANCE = 50;
class Hero{
    constructor(image, top, left, size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement(){
        return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    moveRight(){
        this.left += DISTANCE;
        console.log('ok: ' + this.left);
    }

    moveDown(){
        this.top += DISTANCE;
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

// function start(){
//     if(hero.left < window.innerWidth - hero.size){
//         hero.moveRight();
//     } else {
//         clearInterval(myInt);
//         console.log("STOP MOVING");
//         return;
//     }
//     document.getElementById('game').innerHTML = hero.getHeroElement();
//     console.log("MOVING");
// }

// start();
// let myInt = setInterval(start, 500);

function moveRight(){
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
}
function moveDown(){
    hero.moveDown();
    document.getElementById('game').innerHTML = hero.getHeroElement();
}