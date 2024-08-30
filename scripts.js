let aqua = 'graduated';

let div = document.createElement('div');
div.classList.add('child-div');

let lineContainer = document.createElement('div');
lineContainer.classList.add('line-div');

let containerDiv = document.querySelector('.container-div');

let numberOfLines = 16;

function remakeTheHtml () {
    containerDiv.innerHTML = '';
    lineContainer.innerHTML= '';
    for (let i=0; i<numberOfLines; i++) {
        lineContainer.appendChild(div.cloneNode(true));
    }

    for (let i=0; i<numberOfLines; i++) {
        containerDiv.appendChild(lineContainer.cloneNode(true));
    }
}
remakeTheHtml()


let containerDivAll = document.querySelectorAll('.child-div')
console.log(containerDivAll);
containerDivAll.forEach(() => {
    addEventListener('mouseover', (e) => {
        let target = e.target
        target.classList.add('new-display')
    })
    addEventListener('mouseout', (e) => {
        let target = e.target
        target.classList.remove('new-display')
    })
})

let gridButton = document.querySelector('.grid-button');

gridButton.addEventListener('click', () => {
    let inputGrid = prompt('Please choose the divs per line, up to 100');
    numberOfLines = inputGrid;
    remakeTheHtml();
})