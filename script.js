let currentPage = 1;

function nextPage(){
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add("active");
}

/* Flower + emoji rain */
setInterval(()=>{
    const emoji = document.createElement("div");
    emoji.innerHTML = ["🌸","🌹","💔","😢","🥀"][Math.floor(Math.random()*5)];
    emoji.style.position="absolute";
    emoji.style.left=Math.random()*100+"vw";
    emoji.style.top="-10px";
    emoji.style.fontSize="24px";
    emoji.style.animation="fall 5s linear";
    document.body.appendChild(emoji);

    setTimeout(()=>emoji.remove(),5000);
},150);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
    to{transform:translateY(110vh);opacity:0;}
}`;
document.head.appendChild(style);