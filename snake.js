let inputDir = { x: 0, y: 0 };
const gameoversound = new Audio('die.mp3');
const musicsound = new Audio('backmusic.mp3');
const foodsound = new Audio('food.mp3');
let speed = 10;
let lastpainttime = 0;
let score = 0;
let snakeArr = [
    { x: 4, y: 13 }
]
food1 = { x: 6,  y: 9 };
food2 = { x: 12, y: 12 };
food3 = { x: 13, y: 10 };
 food4= { x: 6,  y: 2 };
let red=2;
let blue=0;
let yellow=1;
let seconds=60;

//Game over function
function Over()
{
    gameoversound.play();
    inputDir = { x: 0, y: 0 };
    alert("GameOver.Press any key to play Again");
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
    let red=2;
    let blue=0;
    let yellow=1;
    let seconds=60;
    location.reload();
}

//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpainttime)/1000 <1/speed){
        return ;

    }
    lastpainttime=ctime;
    gameengine();
}

function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
        if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
            return true;
        }


    }
}
function move1() {
    console.log("ArrowUp");
    inputDir.x = 0;
    inputDir.y = -1;   
}
function move2() {
    console.log("ArrowDown");
    inputDir.x = 0;
    inputDir.y = 1;
}
function move3() {
    console.log("ArrowLeft");
    inputDir.x = -1;
    inputDir.y = 0;
}
function move4() {
    console.log("ArrowRight");
    inputDir.x = 1;
    inputDir.y = 0;
}

function gameengine() {
    musicsound.play();
    if (isCollide(snakeArr)) {
        gameoversound.play();
        musicsound.play();
        inputDir = { x: 0, y: 0 };
        alert("GameOver.Press any key to play Again");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
        let red=2;
        let blue=0;
        let yellow=1;
        let seconds=60;

    }


    
    if(snakeArr[0].x===food1.x && snakeArr[0].y===food1.y){
       red++;
       if(red===yellow+2 && red===blue+3){
        foodsound.play();
        musicsound.play();
       
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        
        let a=2;
        let b=16;
        food1 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        score++;
        scoreBox.innerHTML="Score :"+ score;
        hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
       }
       else{
        Over ();
        snakeArr[{
            x:13,y:15
        }]
        inputDir.x=0;
        inputDir.y=0;
        seconds=60;
        scorebox.textContent="score:0";
        score=0;
        red=2;yellow=1;blue=0;

    }

    }
    if(snakeArr[0].x===food2.x && snakeArr[0].y===food2.y){
        yellow++;
        if(red==yellow+1 && blue==yellow-2){
            foodsound.play();
            musicsound.play();
            
            snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
            
            let a=2;
            let b=18;
            food2 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
            score++;
            scoreBox.innerHTML="Score :"+ score;

        }
        else{
            Over();
            snakeArr[{
                x:13,y:15
            }]
            inputDir.x=0;
            inputDir.y=0;
            seconds=60;
            scorebox.textContent="score:0";
            score=0;
            red=2;yellow=1;blue=0;

        }

    }
    if(snakeArr[0].x===food3.x && snakeArr[0].y===food3.y){
        blue++;
        if( red===blue+2 && yellow===blue+1){
            foodsound.play();
            musicsound.play();
          
            snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
            
            let a=2;
            let b=18;
            food3 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
            score++;
            scoreBox.innerHTML="Score :"+ score;
            
           

        }
        else{
            Over();
            snakeArr[{
                x:13,y:15
            }]
            inputDir.x=0;
            inputDir.y=0;
            seconds=60;
            scorebox.textContent="score:0";
            score=0;
            red=2;yellow=1;blue=0;

        }
    }
        if(snakeArr[0].x===food4.x && snakeArr[0].y===food4.y){
            seconds=seconds+4;
            let a=2;
            let b=18;
            food4 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
            score++;
            scoreBox.innerHTML="Score :"+ score;
        }

    scoreBox.innerHTML="Score :"+ score;
    //moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {

        snakeArr[i + 1] = { ...snakeArr[i] };

    }
    snakeArr[0].x = snakeArr[0].x + inputDir.x;
    snakeArr[0].y = snakeArr[0].y + inputDir.y;


    //timer for game
    function startTimer() {
        let duration = 60; // Duration in seconds
     
        let timer = setInterval(function () {
           let minutes = parseInt(duration / 60, 10);
           let seconds = parseInt(duration % 60, 10);
     
           minutes = minutes < 10 ? "0" + minutes : minutes;
           seconds = seconds < 10 ? "0" + seconds : seconds;
     
           let timerDisplay = document.getElementById("timer");
           timerDisplay.textContent = minutes + ":" + seconds;
     
           if (--duration < 0) {
              clearInterval(timer);
              alert("Game Over : you lost");
              gameOver = true;
     
              timerDisplay.textContent = "Timer ended!";
           
           }
           while (snakeBody[0].x === food.x && snakeBody[0].y === food.y) {
              timer += 5;
              break;
           }
        }, 1000);
     }
     
     startTimer();



    //display snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');

        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

    })


     //food
    food1Element = document.createElement('div');
    food1Element.style.gridRowStart = food1.y;
    food1Element.style.gridColumnStart = food1.x;
    food1Element.classList.add('food1');
    board.appendChild(food1Element);

    food2Element = document.createElement('div');
    food2Element.style.gridRowStart = food2.y;
    food2Element.style.gridColumnStart = food2.x;
    food2Element.classList.add('food2');
    board.appendChild(food2Element);

    food3Element = document.createElement('div');
    food3Element.style.gridRowStart = food3.y;
    food3Element.style.gridColumnStart = food3.x;
    food3Element.classList.add('food3');
    board.appendChild(food3Element);

    food4Element = document.createElement('div');
    food4Element.style.gridRowStart = food4.y;
    food4Element.style.gridColumnStart = food4.x;
    food4Element.classList.add('food4');
    board.appendChild(food4Element);

}

// main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 };

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});

document.addEventListener("keydown", musicsound.play());


