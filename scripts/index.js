
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

window.addEventListener("resize", resizeSkillIcons);
window.onload = resizeSkillIcons;