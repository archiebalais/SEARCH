let text = document.getElementById('text');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');

start();

function start() {
    text.innerHTML = 'Ava: Hey, I think im in trouble.';
    button1.innerHTML = 'How so?';
    button2.innerHTML = 'Why are u texting me this late at night.';

    button1.addEventListener('click', replyOne);
    button2.addEventListener('click', replyTwo);
}

    function replyOne() {
        text.innerHTML = 'placeholder';
        button1.style = 'display: none';
        button2.style = 'display:none';
    }

    function replyTwo() {
        text.innerHTML = 'placeholder2';
        button1.style = 'display: none';
        button2.style = 'display:none';
    }