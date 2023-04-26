const btn = document.getElementById('btn-click')
const mouseMover = document.getElementById('test')
let sound = new Audio(`2.wav`)



mouseMover.addEventListener('mousemove', () => {
    sound.play()
})


// НЕ РАБОТАЕТ:
// btn.addEventListener('click', () => {
//     sound.play()
// })
//
// mouseMover.addEventListener('mousemove', () => {
//     btn.click()
// })

