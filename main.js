let keys = document.querySelectorAll(".key");
let audio;
let key;

function playSound(event) {
  console.log(event.keycode);
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

window.addEventListener("keydown", playSound);
keys.forEach(function (key) {
  key.addEventListener("transitionend", removeTransition);
});

/*##########################################*/

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

  await playBeat(65, 600);
  await playBeat(90, 200);
  await playBeat(88, 400);

  await playBeat(81, 700);
  await playBeat(68, 900);
  await playBeat(67, 1000);

  await playBeat(87, 1200);
  await playBeat(83, 1400);
  await playBeat(69, 1600);
}

document.addEventListener("keydown", (event) => {
  let loop = true;
  if (event.keyCode === 71) {
    // Vérifie si la touche appuyée est la touche G (keyCode 71)
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 72){
        loop = false;
      }    
    });
    while (loop) {
      beatBox(); // Lance la séquence de "beats"
    }
  }
});
