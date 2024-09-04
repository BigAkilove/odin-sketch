let aqua = 'graduated';

let squareDiv = document.createElement('div');
squareDiv.classList.add('child-div');

let lineContainer = document.createElement('div');
lineContainer.classList.add('line-div');

let containerDiv = document.querySelector('.container-div');

let numberOfLines = 16;

let darkenedRGB = -12.25

function remakeTheHtml () {
    containerDiv.innerHTML = '';
    lineContainer.innerHTML= '';
    for (let i=0; i<numberOfLines; i++) {
        lineContainer.appendChild(squareDiv.cloneNode(true));
    }

    for (let i=0; i<numberOfLines; i++) {
        containerDiv.appendChild(lineContainer.cloneNode(true));
    }
    darkenedRGB = -12.25
}
remakeTheHtml();

let xav = document.getElementsByClassName('child-div')
console.log(xav.length)


document.addEventListener('mouseover', (e) => {

    let target = e.target;
    switch(target.className) {
        case 'child-div':
            let randomColor = Math.random()*255 + darkenedRGB;
            let randomColor2 = Math.random()*255 + darkenedRGB;
            let randomColor3 = Math.random()*255 + darkenedRGB;
            target.classList.add('new-display');
            target.style.backgroundColor = 'rgb(' + randomColor + ',' + randomColor2 + ',' + randomColor3 + ')';
            console.log(randomColor,randomColor2,randomColor3, darkenedRGB)
            break;
    }
    darkenedRGB = darkenedRGB - 12.25
});

function addMouseOutEvent (e) {
    let target = e.target;

    switch(target.className) {
        case 'child-div new-display':
            target.classList.remove('new-display');
            target.style.backgroundColor = 'aqua'
            break;
    }
 }
document.addEventListener('mouseout', addMouseOutEvent);

/*
containerDivAll.forEach(() => {
    addEventListener('mouseover', (e) => {
        let target = e.target;SSS
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

let colorsButton = document.querySelector('.colors-button')
//colorsButton.addEventListener('click', () => { 
//    console.log('this works')
//    document.removeEventListener('mouseout',addMouseOutEvent())
//})