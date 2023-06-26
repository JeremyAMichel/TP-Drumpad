let keys = document.querySelectorAll('.key');
let audio;
let key;

function playSound(event) {
  audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);  
  key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (!audio) return ;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event){
  event.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
keys.forEach(function(key){ 
  key.addEventListener('transitionend', removeTransition)
});

/*##########################################*/
const test = function(num1,num2){ return new Promise ((resolve, reject) => {
    // resultat
    const resultat = num1*num2
    
    if (resultat){
      resolve()
    }else{
      reject()
    }
    //
  })}
  /
  test(num1,num2).then((resultat) => {
    console.log(resultat)
  }).catch(() => {
    console.log('erreur')
  })