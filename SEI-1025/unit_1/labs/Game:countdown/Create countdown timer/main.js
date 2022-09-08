let show = document.querySelector('#countdown')

let startB = document.querySelector('.start-1')

let stopB = document.querySelector('.stop-1')




let startTime = 10
let time = startTime * 60 // 600 sec 
let isPaused = false;


function updateCountDown() {
    if (!isPaused) {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        if (seconds < 10) {
            seconds = '0' + seconds
        } else {
            seconds
        }
        time--
        show.innerHTML = `${minutes}:${seconds}`

    }
}
setInterval(updateCountDown, 1000)

startB.onclick = function (e) {
    e.preventDefault()
    isPaused = false
}

stopB.onclick = function (e) {
    e.preventDefault()
    isPaused = true
}








