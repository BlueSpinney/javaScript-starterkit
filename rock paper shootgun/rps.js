document.getElementById('b1').addEventListener('click',setpaper);
document.getElementById('b2').addEventListener('click',setstone);
document.getElementById('b3').addEventListener('click',setsshootgun);

document.getElementById('start').addEventListener('click',fight);

let paper = 0;
let stone = 0;
let shootgun = 0;

let win = 0;

let wins = 0
let ewins = 0

function setenemy(n) {

    var en = document.getElementById('enemy')
    en.style.right
    en.src = 'img1.png'

    if (n == 0){
        en.src = 'img1.png'
    }
    if (n == 1){
        en.src = 'img3.png'
    }
    if (n == 2){
        en.src = 'img2.png'
    }

    
}

function display_image(src) {
    var image = document.getElementById('img')
    image.src = src

}

function fight() {

    var etxt = document.getElementById('wtxt')

    let enemy = Math.floor(Math.random() * 3);
    setenemy(enemy)
    if (stone === paper && paper === shootgun) {
        etxt.textContent = 'please pick a weapon'
    }
    if (stone == paper){
        if (enemy == 0){
            etxt.textContent = 'You win enemy picked pepe'
            win = 1
        }
        else if (enemy == 2){
            etxt.textContent = 'draw enemy picked shootgun'
            win = 2
        }
        else{
            etxt.textContent = 'You lose enemy picked brofist'
            win = 3
        }
    }
    if (paper == shootgun){
        if (enemy == 2){
            etxt.textContent = 'You win enemy picked shootgun'
            win = 1
        }
        else if (enemy == 1){
            etxt.textContent = 'draw enemy picked brofist'
            win = 2
        }
        else{
            etxt.textContent = 'You lose enemy picked pepe'
            win = 3
        } 
    }    
    if (stone == shootgun){
        if (enemy == 1){
            etxt.textContent = 'You win enemy picked brofist'
            win = 1
        }
        else if (enemy == 0){
            etxt.textContent = 'draw enemy picked pepe'
            win = 2
        }
        else{
            etxt.textContent = 'You lose enemy picked shootgun'
            win = 3
        }    
    }
    var W = document.getElementById('wins')
    if (win == 1){
        wins += 1
    }
    if (win == 3){
        ewins += 1
    }
    W.textContent = wins + " : " + ewins


}


function setpaper() {
    if (paper === 0) {
        paper = 1;
        stone = 0;
        shootgun = 0;
        display_image("img1.png")
    }
    else if (paper === 1) {
        paper = 0;
    }
}
function setstone() {
    if (stone === 0) {
        paper = 0;
        stone = 1;
        shootgun = 0;
        display_image("img3.png")
    }
    else if (stone === 1) {
        stone = 0;
    }

}
function setsshootgun() {
    if (shootgun == 0){
        paper = 0;
        stone = 0;
        shootgun = 1;
        display_image("img2.png")
    }
    else if (shootgun === 1){
        shootgun = 1;
    }
}