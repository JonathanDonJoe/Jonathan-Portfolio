
let skillIcons = document.querySelectorAll('.skill-icon');
let skillIcons2 = document.querySelectorAll('.skill-icon2');
// console.log(skillIcons);

// window.onresize = function() {

function resizeSkillIcons() { 
    // console.log('hi')
    if (window.innerWidth >= 650) {
        skillIcons.forEach( (element) => {
            // element.classList.remove('fa-3x');
            element.classList.add('skill-icon-small');
            // console.log('big window')
        })
        skillIcons2.forEach( (element) => {
            // element.classList.remove('fa-3x');
            element.classList.add('skill-icon2-small');
            // console.log('big window')
        })
    } else {
        skillIcons.forEach( (element) => {
            element.classList.remove('skill-icon-small');
            // element.classList.add('fa-3x');
            // console.log('small window')
        })
        skillIcons2.forEach( (element) => {
            element.classList.remove('skill-icon2-small');
            // element.classList.add('fa-3x');
            // console.log('small window')
        })
    }
}


function main() {
    resizeSkillIcons()
    window.addEventListener("resize", resizeSkillIcons);
    document.querySelector('.jump1').addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo(0,0)
    })
    document.querySelector('.jump3').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('#page3-jumper').scrollIntoView(true);
    })
    document.querySelector('.jump4').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('#page4-jumper').scrollIntoView(true);
    })
    document.querySelector('.jump5').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('#page5-jumper').scrollIntoView(true);
    })
    
}

window.onload = main;


