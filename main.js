let keys = document.querySelectorAll(".key");
let audio;
let key;

window.addEventListener("keydown", playSound);
// window.addEventListener("keydown", (event) => {
//  console.log(event);
// });


keys.forEach(function (key) {
  key.addEventListener("transitionend", removeTransition);
});

function playSound(event) {
  // console.log(event);
  audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  event.target.classList.remove("playing");
}



// /*##########################################*/

async function beatBox() {
  function simulateKey(keyCode) {
    let event = new KeyboardEvent("keydown", {
      keyCode: keyCode,
    });
    window.dispatchEvent(event);
  }

  function playBeat(keyCode, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simulateKey(keyCode));
      }, time);
    });
  }


  while(loop){
    await playBeat(65, 100);
    await playBeat(90, 200);
    await playBeat(88, 250);
  
    await playBeat(81, 300);
    await playBeat(68, 400);
    await playBeat(67, 450);
  
    await playBeat(87, 500);
    await playBeat(83, 550);
    await playBeat(69, 600);
  }
  
}

let loop;
document.addEventListener("keydown", (event) => {
   loop = true;
   // Vérifie si la touche appuyée est la touche G (keyCode 71)
  if (event.keyCode === 71) {    
      beatBox(); // Lance la séquence de "beats"
  }
});

document.addEventListener("keydown", (event) => {
  // Vérifie si la touche appuyée est la touche H (keyCode 72)
  if (event.keyCode === 72){
    loop = false;
  }    
});



