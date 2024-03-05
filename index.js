const colors = ['Red','Black','Pink', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function() {
    const randomColor =  getRandomColor()
    document.body.style.background = colors[randomColor] // Aplicando a cor ao background
    // console.log(randomColor)
    color.textContent = colors[randomColor]
})

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}