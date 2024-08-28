let aqua = 'graduated';
let div = document.createElement('div');
div.classList.add('child-div');
let hr = document.createElement('hr');
let containerDiv = document.querySelector('.container-div');

for (let i=0; i<255; i++) {
   // if (i % 15 === 0) {
   //     containerDiv.appendChild(hr.cloneNode(true));
   // }
    containerDiv.appendChild(div.cloneNode(true));
}

let containerDivAll = document.querySelectorAll('.container-div')

containerDivAll.forEach(() => {
    addEventListener('mouseover', (e) => {
        let target = e.target
        console.log(target)
    })
})
