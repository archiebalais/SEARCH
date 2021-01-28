let text = document.getElementById('text');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');

let count = 3;
let playerLives = document.getElementById('player-lives');
playerLives.innerHTML = count;
if 


start();

    function start() {
        text.innerHTML = `Unknown ID: I have her.`;
        button1.innerHTML = 'Who are you?';
        button2.innerHTML = `This isn't funny`;

        button1.addEventListener('click', replyOne);
        button2.addEventListener('click', replyOne);
    }

    function replyOne() {
        text.innerHTML = `Unknown ID: I'm someone very well acquainted with your sister.`;
        button1.innerHTML = `Do you know where she is?`;
        button2.innerHTML = `Stop trolling. I can't deal with this right now.`;

        button1.addEventListener('click', whereSheIs);
        button2.addEventListener('click', stopTrolling);
    }
    
// right
    function whereSheIs() {
        text.innerHTML = `Unknown ID: I can't answer that right now.`;
        button1.innerHTML = `Don't make me call the police.`;
        button2.innerHTML = `I'll do whatever you say. Just give back my sister.`;

        button1.addEventListener('click', callThePolice);
        button2.addEventListener('click', giveBackSister);
        console.log('hello')
    }

// wrong
    function stopTrolling() {
        text.innerHTML = `Unknown ID: Don't make me angry.`;
        button1.innerHTML = `I'm Sorry. I'll do whatever you want.`;
        button2.style = "display: none";

        count --;
        playerLives.innerHTML = count;

        button1.addEventListener('click', giveBackSister);
    }

// wrong
    function callThePolice() {
        text.innerHTML = `Unknown ID: Don't make me angry.`;
        button1.innerHTML = `I'm Sorry. I'll do whatever you want.`;
        button2.style = "display: none";

        count --;
        playerLives.innerHTML = count;

        button1.addEventListener('click', giveBackSister)
    }

 
    function giveBackSister() {
        text.innerHTML = `Unknown ID: I'll give you a hint on her location. One enters me blind, and comes out seeing. What am I?`;
        button1.innerHTML = `A school?`;
        button2.innerHTML = `Death?`
        button2.style = 'display: block';

        button1.addEventListener('click', aSchool);
        button2.addEventListener('click', death);
    }

// wrong
    function death() {
        text.innerHTML = 'Unknown ID: Incorrect.';
        button1.innerHTML = 'Continue...';
        button2.style = 'display: none';

        count --;
        playerLives.innerHTML = count;

        button1.addEventListener('click', aSchool);
    }

    function aSchool() {
        text.innerHTML = 'Unknown ID: Now you know where.';
        button1.innerHTML = `Youre crazy!`;
        button2.innerHTML = `I don't care. I just want her back.`;
        button2.style = 'display: block';

        button1.addEventListener('click', youCrazy);
        button2.addEventListener('click', wantHerBack);
    }

// wrong
    function youCrazy() {
        text.innerHTML = `Unknown ID: Don't call me crazy. That angers me.`;
        button1.innerHTML = 'Continue...';
        button2.style = 'display: none';

        count --;
        playerLives.innerHTML = count;

        button1.addEventListener('click', wantHerBack);
    }

    function wantHerBack() {
        text.innerHTML = `Unknown ID: She's safe and sound somewhere locked in the abandoned school at Burnett St... Now where exactly do you think she is in the campus?`;
        button1.innerHTML = 'Auditorium?';
        button2.innerHTML = 'Gym?';
        button2.style = 'display: block';

        button1.addEventListener('click', auditorium);
        button2.addEventListener('click', gym);
    }

// wrong
    function auditorium() {
        text.innerHTML = 'Unknown ID: Incorrect.';
        button1.innerHTML = 'Continue...';
        button2.style = 'display: none';

        count --;
        playerLives.innerHTML = count;

        button1.addEventListener('click', gym)
    }

    function gym() {
        text.innerHTML = 'Unknown ID: Now you know where she is... Now I have one last riddle for you. But be careful, if you get this wrong I promise you will never see her again.';
        button1.innerHTML = `Okay... what is it?`;
        button2.style = 'display: none';

        button1.addEventListener('click', finalRiddle);
    }

    function finalRiddle() {;
        text.innerHTML = 'final riddle'
        button1.innerHTML = 'test';
        button2.innerHTML = 'test2';
        button2.style = 'display: block';

        button1.addEventListener('click', winScreen);
        button2.addEventListener('click', losingScreen);
    }

    function winScreen() {
        text.innerHTML = 'WIN';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }

    function losingScreen() {
        text.innerHTML = 'LOSE';
        button1.style = 'display: none';
        button2.style = 'display: none';
    }