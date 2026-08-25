const target = new Date("2026-08-28T00:00:00+03:00").getTime();

const $ = id => document.getElementById(id);
function pad(n){ return String(n).padStart(2,"0"); }

function updateCountdown(){
  let diff = target - Date.now();
  if(diff <= 0){
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    return;
  }
  const day = 86400000, hour = 3600000, minute = 60000;
  const days = Math.floor(diff/day); diff %= day;
  const hours = Math.floor(diff/hour); diff %= hour;
  const minutes = Math.floor(diff/minute); diff %= minute;
  const seconds = Math.floor(diff/1000);
  $("days").textContent = pad(days);
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
}
updateCountdown();
setInterval(updateCountdown,1000);

const hearts = document.getElementById("hearts");
function makeHeart(x=Math.random()*100, delay=0){
  const h=document.createElement("span");
  h.className="float-heart";
  h.textContent=Math.random()>.35?"♥":"♡";
  h.style.left=x+"%";
  h.style.fontSize=(14+Math.random()*25)+"px";
  h.style.animationDuration=(6+Math.random()*7)+"s";
  h.style.animationDelay=delay+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),15000);
}
for(let i=0;i<18;i++) makeHeart(Math.random()*100, Math.random()*7);
setInterval(()=>makeHeart(Math.random()*100),900);

document.querySelectorAll(".reveal").forEach((el,i)=>{
  setTimeout(()=>el.classList.add("visible"),150+i*170);
});

$("heartBtn").addEventListener("click",()=>{
  for(let i=0;i<18;i++) makeHeart(35+Math.random()*30, i*.06);
  $("toast").classList.add("show");
  setTimeout(()=>$("toast").classList.remove("show"),3000);
});
