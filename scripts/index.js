
let skillIcons = document.querySelectorAll('.skill-icon');
console.log(skillIcons);

// window.onresize = function() {

function resizeSkillIcons() { 
    // console.log('hi')
    if (window.innerWidth > 703) {
        skillIcons.forEach( (element) => {
            // element.classList.remove('fa-3x');
            element.classList.add('skill-icon-small');
            console.log('big window')
        })
    } else {
        skillIcons.forEach( (element) => {
            element.classList.remove('skill-icon-small');
            // element.classList.add('fa-3x');
            console.log('small window')
        })
    }
}

window.addEventListener("resize", resizeSkillIcons);
window.onload = resizeSkillIcons;