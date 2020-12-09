const nave = document.querySelector('.player-shooter')
const area = document.querySelector('#main-play-game')

// Movimento e tiro
function flyAhip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault()
        moveUp()
    } else if(event.key === 'ArrowDown'){
        event.preventDefault()
        moveDown()
    }else if(event.key === " "){
        event.preventDefault()
        fireLaser()
    }
    }

// Subir
function moveUp(){
    let topPosition = getComputedStyle(nave).getPropertyValue('top')
    if(topPosition === "0px"){
        return
    }else{
        let position = parseInt(topPosition)
        position -= 50
        nave.style.top = `${position}px`
    }
}

// Descer

function moveDown(){
    let topPosition = getComputedStyle(nave).getPropertyValue('top')
    if(topPosition === "550px"){
        return
    }else{
        let position = parseInt(topPosition)
        position +=50
        nave.style.top = `${position}px`
    }
}

window.addEventListener('keydown', flyAhip)