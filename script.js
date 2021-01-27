let text = document.getElementById('text');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');

start();

function start() {
        text.innerHTML = `You wake up on a stone cold floor. There is a door in front of you.`;
        button1.innerHTML = 'Open Door';
        button2.innerHTML = 'Stay still';

        button1.addEventListener('click', openDoor);
        button2.addEventListener('click', stayStill);
}

    function openDoor() {
        text.innerHTML = `You walk straight down the hallway but it seems endless.`;
        button1.innerHTML = 'Walk even more';
        button2.innerHTML = 'turn left';

        button1.addEventListener('click', walkEvenMore)
        button2.addEventListener('click', turnLeft) 
    }

    function stayStill() {
        text.innerHTML = 'DEATH';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }

    function walkEvenMore() {
        text.innerHTML = `win placeholder`
        button1.innerHTML = `choice1`
        button2.innerHTML = 'choice2'

        button1.addEventListener('click', choice1)
        button2.addEventListener('click', choice2)
    }

    function turnLeft() {
        text.innerHTML = 'DEATH';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }

    function choice1() {
        text.innerHTML = 'DEATH';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }

    function choice2() {
        text.innerHTML = `win placeholder222`
        button1.innerHTML = `choice1`
        button2.innerHTML = 'choice2'

        button1.addEventListener('click', choice1Again)
        button2.addEventListener('click', choice2Again)
    }

    function choice1Again() {
        text.innerHTML = `win placeholder3`
        button1.innerHTML = 'choice1'
        button2.innerHTML = `choice2`

    }

    function choice2Again() {
        text.innerHTML = 'DEATH';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }