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

        button1.addEventListener('click', walkEvenMore);
        button2.addEventListener('click', turnLeft);
    }

    function stayStill() {
        text.innerHTML = "death";
        button1.innerHTML = 'Restart';
        button1.addEventListener('click', start);
        button2.style = "display: none";
    }

    function walkEvenMore() {
        text.innerHTML = "win.You find yourself...";
        button1.innerHTML = "A";
        button2.innerHTML = "B";

        button1.addEventListener('click', choiceA)
        button2.addEventListener('click', choiceB)
    }

    function turnLeft() {
        text.innerHTML = "death";
        button1.style = "display: none";
        button2.style = "display: none";
    }

    function choiceA() {
        text.innerHTML = "you made choice A";
        button1.innerHTML = "test";
        button2.innerHTML = "test A";
    }

    function choiceB() {
        text.innerHTML = "you made choice B";
        button1.innerHTML = "test";
        button2.innerHTML = "test B"
        button1.style = "display: block"
        button2.style = "display: block"
        button2.removeEventListener()
    }
