let text = document.getElementById('text');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let image = document.getElementById('image');

let count = 3;
let playerLives = document.getElementById('player-lives');
playerLives.innerHTML = count;

enterScreen();

    function enterScreen() {
        image.setAttribute('src', 'img/search.jpg');
        text.innerHTML = 'Your sister has been missing with no traces or hints for 4 days. You recieve a text message from an unkown ID.';
        button1.innerHTML = 'ENTER';
        button1.style = 'align-items: center';
        button2.style = 'display: none';

        button1.addEventListener('click', start);
        
    }
    


function loseLife() {
    console.log(count)
    count -- ;
    playerLives.innerHTML = count;
    if (count <= 0) {
        losingScreen()
    }
}

function start() {
    text.innerHTML = `Unknown ID: I have her.`;
    button1.innerHTML = 'Who are you?';
    button2.innerHTML = `This isn't funny`;
    text.style = 'display: block';
    button2.style = 'display: block';

    button1.removeEventListener('click', start)

    button1.addEventListener('click', replyOne);
    button2.addEventListener('click', replyOne);
}

function replyOne() {
    console.log("Right -> replyOne()");
    text.innerHTML = `Unknown ID: I'm someone very well acquainted with your sister.`;
    button1.innerHTML = `Do you know where she is?`;
    button2.innerHTML = `Stop trolling. I can't deal with this right now.`;

    button1.removeEventListener('click', replyOne);
    button2.removeEventListener('click', replyOne);

    button1.addEventListener('click', whereSheIs);
    button2.addEventListener('click', stopTrolling);
}

// right
function whereSheIs() {
    console.log("Right -> whereSheIs()");
    text.innerHTML = `Unknown ID: I can't answer that right now.`;
    button1.innerHTML = `Don't make me call the police.`;
    button2.innerHTML = `I'll do whatever you say. Just give back my sister.`;
    button1.removeEventListener('click', whereSheIs);
    button2.removeEventListener('click', stopTrolling);

    button1.addEventListener('click', callThePolice);
    button2.addEventListener('click', giveBackSister);
    
}

// wrong
function stopTrolling() {
    console.log("Wrong  -> stopTrolling()");

    text.innerHTML = `Unknown ID: Don't make me angry.`;
    button1.innerHTML = `I'm Sorry. I'll do whatever you want.`;
    button2.style = "display: none";

    loseLife();

    button1.addEventListener('click', giveBackSister);
    button2.addEventListener('click', giveBackSister)
}



// wrong
function callThePolice() {
    console.log("Wrong -> callThePolice()");

    text.innerHTML = `Unknown ID: Don't make me angry.`;
    button1.innerHTML = `I'm Sorry. I'll do whatever you want.`;
    button2.style = "display: none";

    loseLife();
    button1.removeEventListener('click', callThePolice);
    button2.removeEventListener('click', giveBackSister);

    button1.addEventListener('click', giveBackSister)
}

// correct
function giveBackSister() {
    console.log("Right -> giveBackSister()");

    text.innerHTML = `Unknown ID: I'll give you a hint on her location. One enters me blind, and comes out seeing. What am I?`;
    button1.innerHTML = `A school?`;
    button2.innerHTML = `Death?`
    button2.style = 'display: block';
    
    button1.removeEventListener('click', callThePolice);
    button2.removeEventListener('click', giveBackSister)

    button1.addEventListener('click', aSchool);
    button2.addEventListener('click', death);
}

// wrong
function death() {
    console.log("Wrong  -> death()");

    text.innerHTML = 'Unknown ID: Incorrect.';
    button1.innerHTML = 'Continue...';
    button2.style = 'display: none';

    loseLife();

    button1.addEventListener('click', aSchool);
}

function aSchool() {
    console.log("Right  -> aSchool");

    text.innerHTML = 'Unknown ID: Now you know where.';
    button1.innerHTML = `Youre crazy!`;
    button2.innerHTML = `I don't care. I just want her back.`;
    button2.style = 'display: block';

    button1.removeEventListener('click', aSchool);
    button2.removeEventListener('click', death);

    button1.addEventListener('click', youCrazy);
    button2.addEventListener('click', wantHerBack);
}

// wrong
function youCrazy() {
    console.log("Wrong -> youCrazy()");

    text.innerHTML = `Unknown ID: Don't call me crazy. That angers me.`;
    button1.innerHTML = 'Continue...';
    button2.style = 'display: none';

    loseLife();
    button1.removeEventListener('click', youCrazy);
    button2.removeEventListener('click', wantHerBack);

    button1.addEventListener('click', wantHerBack);
}

function wantHerBack() {
    console.log("Right -> wantHerBack()");

    text.innerHTML = `Unknown ID: She's safe and sound somewhere locked in the abandoned school at Burnett St... Now where exactly do you think she is in the campus?`;
    button1.innerHTML = 'Auditorium?';
    button2.innerHTML = 'Gymnasium?';
    button2.style = 'display: block';
    
    button1.removeEventListener('click', youCrazy)
    button2.removeEventListener('click', wantHerBack)

    button1.addEventListener('click', auditorium);
    button2.addEventListener('click', gym);
}

// wrong
function auditorium() {
    console.log("Wrong");

    text.innerHTML = 'Unknown ID: Incorrect.';
    button1.innerHTML = 'Continue...';
    button2.style = 'display: none';

    loseLife();
    button1.removeEventListener('click', auditorium);
    button2.removeEventListener('click', gym);

    button1.addEventListener('click', gym)
}

function gym() {
    console.log("Right");

    text.innerHTML = 'Unknown ID: Now you know where she is... Now I have one last riddle for you. But be careful, if you get this wrong I promise you will never see her again.';
    button1.innerHTML = `Okay... what is it?`;
    button2.style = 'display: none';

    button1.removeEventListener('click', auditorium)
    button2.removeEventListener('click', gym)

    button1.addEventListener('click', finalRiddle);
}

function finalRiddle() {
    console.log("Right");

    text.innerHTML = 'The foolish man wastes me, The average man spends me, And wise man invests me, Yet all men succumb to me. What am I?'
    button1.innerHTML = 'Money';
    button2.innerHTML = 'Time';
    button2.style = 'display: block';

    button1.addEventListener('click', winScreen);
    button2.addEventListener('click', losingScreen);
    button1.addEventListener('click', finalRiddle)
}

function winScreen() {
    console.log("Right");

    image.setAttribute('src', 'img/WIN.jpg')
    text.innerHTML = ' ';
    button1.style = 'display: none';
    button2.style = 'display: none';
}

function losingScreen() {
    console.log("Right");

    text.innerHTML = ' ';
    button1.style = 'display: none';
    button2.style = 'display: none';
    image.setAttribute('src', 'img/LOSE.jpg')
}