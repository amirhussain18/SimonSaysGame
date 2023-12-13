let gameSeq = [];
let userSeq = [];
let level = 0;
let round = 0;
let score = 0;
let running = false;

let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let p = document.querySelector("p");
let restart = document.querySelector("button");

function flash(button){
    let flashBtn = document.querySelector(`.${button}`);
    flashBtn.classList.add("flash");
    setTimeout(()=>{flashBtn.classList.remove("flash");}, 250);
}


function startIt(){
    if ((running==false) && (level==0)){
        running=true;
        levelUp();
    }
}
document.addEventListener("keypress", startIt);


function levelUp(){
    setTimeout(()=>{
        round = 0;
        userSeq = [];
        level++;
        h3.innerText = `LEVEL ${level}`;
        let randBtn = Math.ceil(Math.random()*4);
        let gameChoice = `btn${randBtn}`;
        p.innerText = `${p.innerText} ${randBtn}`;
        gameSeq.push(gameChoice);
        flash(gameChoice);},400);
}


function userInput(){
    if (running==true){
        let userChoice = this.classList[0];
        flash(userChoice);
        userSeq.push(userChoice);

        if(userSeq[round]==gameSeq[round]){
            round++;
            score++;
            if (round==level){
                levelUp();
            }
        }else{
            gameOver();
        }
        
    }else{
        startIt();
    }
}
btn1.addEventListener("click",userInput);
btn2.addEventListener("click",userInput);
btn3.addEventListener("click",userInput);
btn4.addEventListener("click",userInput);


function gameOver(){
    running = false;
    h3.innerText = `Game Over! Your Score is ${score}.`;
    console.log("Game Over");
    body.classList.add("danger");
    restart.style.display="inline-block";
}

restart.addEventListener("click",()=>{history.go();});