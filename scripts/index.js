
let skillIcons = document.querySelectorAll('.skill-icon');
console.log(skillIcons);

// window.onresize = function() {

function resizeSkillIcons() { 
    // console.log('hi')
    if (window.innerWidth > 375) {
        skillIcons.forEach( (element) => {
            element.classList.remove('fa-3x');
            element.classList.add('fa-7x');
            console.log('big window')
        })
    } else {
        skillIcons.forEach( (element) => {
            element.classList.remove('fa-7x');
            element.classList.add('fa-3x');
            console.log('small window')
        })
    }
}

window.addEventListener("resize", resizeSkillIcons);
window.onload = resizeSkillIcons;