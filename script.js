const clueHoldTime = 1000; // each clue light
const cluePauseTime = 333; //clue pause time
const nextClueWaitTime = 1500; //waittime before starting playback

var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //can only be 0 to 1
var guessCounter = 0;
var mistakeCounter = 0;
var startingLives = 3;
var totalTime = 90;
var timeLeft;
var timeInterval;

function randomPattern(){//Optional Feautre 
  pattern = Array.from({length: 8}, () => Math.floor(Math.random() * 5)+1);
  console.log(pattern);
}

function timer(){//Optional Feautre - countdown
  timeInterval = setInterval(function () {
      timeLeft--;
      document.getElementById("time").innerHTML= timeLeft;
      if(timeLeft ==0){
        stopGame();
        alert("Ran out of time");
      }
  },1000);
    
}

function startGame(){
  timeLeft = totalTime;
  document.getElementById("heart1").style.display="unset";
  document.getElementById("heart2").style.display="unset";
  document.getElementById("heart3").style.display="unset";
  randomPattern();
  mistakeCounter = 0;
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  updateLives();
  timer();
  playClueSequence();
}

function stopGame(){
  clearInterval(timeInterval);
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 325,
  3: 400,
  4: 475,
  5: 550
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization, Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Light the button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
//Clear the button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function updateLives(){
  document.getElementById("lives").innerHTML = startingLives - mistakeCounter; 
}

function winGame(){
  stopGame();
  alert("High Five, You WON!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{ //Optional Feuature - 3 Strikes
    mistakeCounter+=1
    document.getElementById("heart"+mistakeCounter).style.display ="none";
    updateLives();
    if (mistakeCounter >= startingLives){
      loseGame(); //no more lives left
    }else{
      playClueSequence();
    }      
  }  
}