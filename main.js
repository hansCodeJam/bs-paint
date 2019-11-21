function eventColor(event) {
    const listArray = document.querySelector('.current-brush').classList;
    document.querySelector('.current-brush').classList.replace(`${listArray[1]}`, `${event.target.classList[1]}`)
}
function eventColor1(event) {
    const listArray = document.querySelector('.current-brush').classList;
    event.target.classList.replace(`${event.target.classList[1]}`, `${listArray[1]}`)
}

const colorSquare = document.querySelectorAll('.square');
const colorPalette = document.querySelectorAll('.palette-color');

for(let i = 0; i < colorPalette.length; i++) {
    colorPalette[i].addEventListener('click', eventColor)
}
for(let i = 0; i <colorSquare.length; i++) {
    colorSquare[i].addEventListener('click', eventColor1);
}