const file = document.querySelector('.file')
let isDragging = false

document.addEventListener('mousemove', move)

file.addEventListener('mousedown', (e) => {
    e.preventDefault()
    file.classList.add('drag')
    isDragging = true
})

file.addEventListener('mouseup', (e) => {
    e.preventDefault()
    file.classList.remove('drag')
    isDragging = false
})

file.addEventListener('mousemove', move)

function move(e){
    if(isDragging){
        let x = e.pageY - file.clientHeight / 2
        let y = e.pageX - file.clientWidth / 2   

        file.style.top = `${x}px`
        file.style.left = `${y}px`
   
    }
}