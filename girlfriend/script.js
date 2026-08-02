// ===============================
// Happy Girlfriend Day
// Script Part 3A
// ===============================

// ------------------------------
// Loading Screen
// ------------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        },800);

    },2500);

});

// ------------------------------
// Typewriter
// ------------------------------

const text =
"Hai Ratna ❤️ Terima kasih sudah hadir dalam hidupku. Semoga kita selalu bersama dan terus menciptakan kenangan indah. Happy Girlfriend Day ❤️";

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,60);

    }

}

setTimeout(typeWriter,3000);

// ------------------------------
// Musik
// ------------------------------

const music = document.getElementById("music");

document.getElementById("startBtn").addEventListener("click",()=>{

    music.play().catch(() => {
        console.log("Browser memerlukan interaksi pengguna.");
    });

    document.querySelector(".gallery").scrollIntoView({
        behavior:"smooth"
    });

});

// ------------------------------
// Slideshow
// ------------------------------

const images = document.querySelectorAll(".slider img");

let current = 0;

function slideshow(){

    images.forEach(img=>{

        img.style.opacity=".3";
        img.style.transform="scale(.95)";

    });

    images[current].style.opacity="1";
    images[current].style.transform="scale(1.03)";

    current++;

    if(current >= images.length){

        current = 0;

    }

}

slideshow();

setInterval(slideshow,3000);

// ------------------------------
// Popup Love
// ------------------------------

const popup = document.getElementById("popup");

document.getElementById("loveBtn").onclick = ()=>{

    popup.style.display="flex";

    confetti({

        particleCount:200,
        spread:120,
        origin:{y:.6}

    });

}

function closePopup(){

    popup.style.display="none";

}

// ------------------------------
// Forever Button
// ------------------------------

document.getElementById("foreverBtn").onclick=()=>{

    confetti({

        particleCount:400,
        spread:180

    });

    alert("❤️ Terima kasih sudah menjadi bagian terindah dalam hidupku ❤️");

}

// ------------------------------
// Counter
// ------------------------------

// Ganti tanggal sesuai tanggal jadian kalian
const startDate = new Date("2026-02-14");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("timeTogether").innerHTML =
        days + " Hari ❤️";

}

updateCounter();

setInterval(updateCounter,1000);

// ------------------------------
// Efek Glow Tombol
// ------------------------------

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 30px #ff4d6d";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});

// ======================================
// PART 3B
// Sakura • Hearts • Sparkle • Fireworks
// ======================================

// ------------------------------
// Hujan Hati
// ------------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-50px";
    heart.style.fontSize=(15+Math.random()*25)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let y=-50;

    const fall=setInterval(()=>{

        y+=3;

        heart.style.top=y+"px";

        heart.style.transform=
        "translateX("+Math.sin(y/40)*20+"px)";

        if(y>window.innerHeight){

            clearInterval(fall);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,500);

// ------------------------------
// Sakura
// ------------------------------

function createFlower(){

    const flower=document.createElement("div");

    flower.innerHTML="🌸";

    flower.style.position="fixed";
    flower.style.left=Math.random()*100+"vw";
    flower.style.top="-30px";
    flower.style.fontSize=(18+Math.random()*18)+"px";
    flower.style.pointerEvents="none";
    flower.style.zIndex="998";

    document.body.appendChild(flower);

    let y=-30;

    const fall=setInterval(()=>{

        y+=2;

        flower.style.top=y+"px";

        flower.style.transform=
        "translateX("+Math.cos(y/30)*30+"px) rotate("+y+"deg)";

        if(y>window.innerHeight){

            clearInterval(fall);

            flower.remove();

        }

    },20);

}

setInterval(createFlower,700);

// ------------------------------
// Sparkle Mouse
// ------------------------------

document.addEventListener("mousemove",(e)=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=e.clientX+"px";
    star.style.top=e.clientY+"px";
    star.style.pointerEvents="none";
    star.style.fontSize="18px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.transition=".8s";
        star.style.opacity="0";
        star.style.transform="translateY(-20px)";

    },20);

    setTimeout(()=>{

        star.remove();

    },900);

});

// ------------------------------
// Fireworks
// ------------------------------

function firework(){

    confetti({

        particleCount:120,
        spread:80,
        startVelocity:50,
        origin:{
            x:Math.random(),
            y:Math.random()*0.5
        }

    });

}

setInterval(firework,9000);

// ------------------------------
// Heart Explosion
// ------------------------------

document.addEventListener("click",(e)=>{

    for(let i=0;i<12;i++){

        const h=document.createElement("div");

        h.innerHTML="💖";

        h.style.position="fixed";
        h.style.left=e.clientX+"px";
        h.style.top=e.clientY+"px";
        h.style.pointerEvents="none";

        document.body.appendChild(h);

        const angle=Math.random()*360;

        const distance=50+Math.random()*120;

        const x=Math.cos(angle)*distance;

        const y=Math.sin(angle)*distance;

        h.animate([

            {

                transform:"translate(0,0) scale(1)",
                opacity:1

            },

            {

                transform:
                `translate(${x}px,${y}px) scale(.3)`,

                opacity:0

            }

        ],{

            duration:1200

        });

        setTimeout(()=>{

            h.remove();

        },1200);

    }

});

// ------------------------------
// Floating Love Text
// ------------------------------

const words=[
"Love ❤️",
"Forever 💖",
"Miss You 🥰",
"My Girl 🌹",
"Ratna ❤️"
];

function floatingText(){

    const t=document.createElement("div");

    t.innerHTML=
    words[Math.floor(Math.random()*words.length)];

    t.style.position="fixed";
    t.style.left=Math.random()*90+"vw";
    t.style.bottom="0";
    t.style.color="white";
    t.style.fontWeight="bold";
    t.style.opacity=".8";
    t.style.pointerEvents="none";

    document.body.appendChild(t);

    let y=0;

    const up=setInterval(()=>{

        y+=2;

        t.style.transform=
        `translateY(-${y}px)`;

        t.style.opacity=1-y/250;

        if(y>250){

            clearInterval(up);

            t.remove();

        }

    },20);

}

setInterval(floatingText,4000);

// ------------------------------
// Hero Glow Animation
// ------------------------------

setInterval(()=>{

    document.querySelector(".content h1").animate([

        {
            textShadow:"0 0 10px #ff4d6d"
        },

        {
            textShadow:"0 0 40px #ffffff"
        },

        {
            textShadow:"0 0 10px #ff4d6d"
        }

    ],{

        duration:2500

    });

},2600);

// ======================================
// PART 3C (FINAL)
// Premium Romantic Effects
// ======================================

// ------------------------------
// Gift Animation
// ------------------------------

setTimeout(() => {

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

},3500);

// ------------------------------
// Lightbox Gallery
// ------------------------------

const galleryImages=document.querySelectorAll(".slider img");

const lightbox=document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.top="0";
lightbox.style.left="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.9)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="999999";

const preview=document.createElement("img");

preview.style.maxWidth="90%";
preview.style.maxHeight="90%";
preview.style.borderRadius="20px";
preview.style.boxShadow="0 0 40px white";

lightbox.appendChild(preview);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

    img.style.cursor="pointer";

    img.onclick=()=>{

        preview.src=img.src;

        lightbox.style.display="flex";

    }

});

lightbox.onclick=()=>{

    lightbox.style.display="none";

};

// ------------------------------
// Music Floating Button
// ------------------------------

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵";

musicBtn.style.position="fixed";
musicBtn.style.right="20px";
musicBtn.style.bottom="20px";
musicBtn.style.width="60px";
musicBtn.style.height="60px";
musicBtn.style.borderRadius="50%";
musicBtn.style.border="none";
musicBtn.style.background="#ff4d6d";
musicBtn.style.color="white";
musicBtn.style.fontSize="25px";
musicBtn.style.cursor="pointer";
musicBtn.style.zIndex="99999";

document.body.appendChild(musicBtn);

musicBtn.onclick=()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🔊";

    }else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

};

// ------------------------------
// Forever Effect
// ------------------------------

document.getElementById("foreverBtn").addEventListener("click",()=>{

    const text=document.createElement("div");

    text.innerHTML="❤️ I LOVE YOU RATNA ❤️";

    text.style.position="fixed";
    text.style.top="50%";
    text.style.left="50%";
    text.style.transform="translate(-50%,-50%)";
    text.style.fontSize="60px";
    text.style.fontWeight="bold";
    text.style.color="white";
    text.style.textShadow="0 0 25px red";
    text.style.zIndex="999999";

    document.body.appendChild(text);

    confetti({
        particleCount:600,
        spread:360
    });

    setTimeout(()=>{

        text.remove();

    },3500);

});

// ------------------------------
// Random Quotes
// ------------------------------

const quotes=[

"Terima kasih sudah hadir di hidupku ❤️",

"Kamu adalah alasan aku tersenyum 😊",

"Semoga kita selalu bersama 💖",

"Aku sayang kamu lebih dari kata-kata ❤️",

"Happy Girlfriend Day Ratna 🌹"

];

setInterval(()=>{

    document.getElementById("typing").innerHTML=

    quotes[Math.floor(Math.random()*quotes.length)];

},9000);

// ------------------------------
// Smooth Fade Sections
// ------------------------------

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,
transform:"translateY(50px)"

},

{

opacity:1,
transform:"translateY(0)"

}

],{

duration:1000

});

}

});

});

sections.forEach(sec=>{

observer.observe(sec);

});

// ------------------------------
// Auto Scroll Love
// ------------------------------

let auto=false;

setTimeout(()=>{

auto=true;

},12000);

setInterval(()=>{

if(auto){

window.scrollBy({

top:2,

behavior:"Moderato"

});

}

},120);

// ------------------------------
// Console Message
// ------------------------------

console.log("❤️ Happy Girlfriend Day ❤️");
console.log("Made with Love for Ratna Dwi Hapsar");
console.log("By Naufazz");

// ======================================
// END
// ======================================