let skeleton = document.getElementById("skeleton");

let counter = 0;
let lineCounter = 0;
let tick = 7;
let posX = 0;
let posY = 0;
let speed = 15;

function moveSkeleton(){
    if (tick % 7 == 0) {
        skeleton.style.backgroundPositionX = 100 * counter + "%"
        skeleton.style.backgroundPositionY = 9 * lineCounter + "%"
        skeleton.style.left = posX + "px"
        skeleton.style.top = posY + "px"
    }
    window.requestAnimationFrame(moveSkeleton)
    tick++
}

window.requestAnimationFrame(moveSkeleton)

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'ArrowRight':
            counter++
            lineCounter = 2
            posX += speed
            break;
        case 'ArrowLeft':
            counter++
            lineCounter = 3
            posX -= speed
            break;
        case 'ArrowUp':
            counter++
            lineCounter = 1
            posY -= speed
            break;
        case 'ArrowDown':
            counter++
            posY += speed;
            break;
        case ' ':
            
            break;
    }
})

window.addEventListener("keyup", () => {
    lineCounter = 0;
})