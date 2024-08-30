let aqua = 'graduated';

let squareDiv = document.createElement('div');
squareDiv.classList.add('child-div');

let lineContainer = document.createElement('div');
lineContainer.classList.add('line-div');

let containerDiv = document.querySelector('.container-div');

let numberOfLines = 16;

function remakeTheHtml () {
    containerDiv.innerHTML = '';
    lineContainer.innerHTML= '';
    for (let i=0; i<numberOfLines; i++) {
        lineContainer.appendChild(squareDiv.cloneNode(true));
    }

    for (let i=0; i<numberOfLines; i++) {
        containerDiv.appendChild(lineContainer.cloneNode(true));
    }
}
remakeTheHtml();

document.addEventListener('mouseover', (e) => {
    let target = e.target;

    switch(target.className) {
        case 'child-div':
            target.classList.add('new-display');
            break;
    }
        
});
document.addEventListener('mouseout', (e) => {
    let target = e.target;

    switch(target.className) {
        case 'child-div new-display':
            target.classList.remove('new-display');
            break;
    }
 });

/* let containerDivAll = document.querySelectorAll('.child-div')

containerDivAll.forEach(() => {
    addEventListener('mouseover', (e) => {
        let target = e.target;
        target.classList.add('new-display');
    });
    addEventListener('mouseout', (e) => {
        let target = e.target;
        target.classList.remove('new-display');
    });
}); */

let gridButton = document.querySelector('.grid-button');

gridButton.addEventListener('click', () => {
    let inputGrid = prompt('Please choose the divs per line, up to 100');
    numberOfLines = inputGrid;
    remakeTheHtml();
})