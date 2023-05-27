var state=document.getElementById("state");
var cpu=document.getElementById("cpu");
var gu=document.getElementById("gu");
var cho=document.getElementById("cho");
var pa=document.getElementById("pa");
var player=document.getElementById("player");
var reset=document.getElementById("reset");
var win=document.getElementById("win");
var lose=document.getElementById("lose");

var jans=["グー","チョキ","パー"]
var playjan;
var cpuja;
var winCount=0;
 loseCount=0;


start();

gu.addEventListener("click",()=>{
  player.textContent=jans[0];
  playjan=jans[0]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja; 
  result();
})

cho.addEventListener("click",()=>{
  player.textContent=jans[1];
  playjan=jans[1]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})

pa.addEventListener("click",()=>{
  player.textContent=jans[2];
  playjan=jans[2]
  cpuja=jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
  cpu.textContent=cpuja;
  result();
})

reset.addEventListener("click",()=>{
  start();
  state.textContent="最初はグー！じゃんけん・・・";
})

function result(){
  if(playjan===cpuja){
    state.textContent="あいこで・・・"
  }else if(playjan===jans[0]&&cpuja===jans[1]||playjan===jans[1]&&cpuja===jans[2]||playjan===jans[2]&&cpuja===jans[0]){
    state.textContent="かち";
    display()
    winCount++;
    win.textContent=winCount;
    
  }else{
    state.textContent="まけ";
    display()
    loseCount++;
    lose.textContent=loseCount;
  }
}

function start(){
  gu.disabled=false;
  cho.disabled=false;
  pa.disabled=false;
  reset.disabled=true;
}

function display(){
  gu.disabled=true;
  cho.disabled=true;
  pa.disabled=true;
  reset.disabled=false;
}

const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);