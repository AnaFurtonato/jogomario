const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);

}
const loop = setInterval(()=>{

    console.log(loop);

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* Esse + transforma uma string em numero */

   
    if (canoPosition <= 120 && canoPosition >= 0 && marioPosition < 100) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = '../img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';   
        


        clearInterval(loop);
        
    }    
}, 10)

document.addEventListener('keydown', pulo);


