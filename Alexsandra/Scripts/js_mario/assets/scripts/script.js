var mario = document.querySelector('.mario')
const tubo = document.querySelector('.pipe')
var nuvem = document.querySelector('.cloud')
const gameOver = document.querySelector('.score-board')

function pulo() {
    /* adicionando a classe jump no elemento mario */
    mario.classList.add('jump');

    /* timer */

    setTimeout(() => {
    mario.classList.remove('jump')
    }, 500)

}

/* verificar a colisão do mario e do tubo */

const jogo = setInterval(() => {
    // Receber a posição do tubo
    var posicaoTubo = tubo.offsetLeft
    var posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','')
    var posicaonuvem = nuvem.offsetLeft
    
    if( posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80 ){

        //game over

        /* parar tubo */
        tubo.style.animation = 'none'
        tubo.style.left = `${posicaoTubo}px`

        /* parar mario */

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        mario.style.width = `75px`
        mario.style.marginLeft = `50px`
        mario.src = "./assets/imgs/game-over.png"

        /* parar nuvem */
        nuvem.style.animation ='none'
        nuvem.style.left = `${posicaonuvem}px`

        /* mostrar GameOver */
        gameOver.style.display = 'flex'



        clearInterval( jogo )
    }

},10)


document.addEventListener('keydown', pulo)

