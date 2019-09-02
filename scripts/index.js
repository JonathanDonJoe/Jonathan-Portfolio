
let skillIcons = document.querySelectorAll('.skill-icon');
console.log(skillIcons);

window.onresize = function() {
    // console.log('hi')
    if (window.innerWidth > 375) {
        skillIcons.forEach( (element) => {
            element.classList.remove('fa-3x');
            element.classList.add('fa-7x');
            // console.log('hi')
        })
    } else {
            skillIcons.forEach( (element) => {
                element.classList.remove('fa-7x');
                element.classList.add('fa-3x');
            })
    }
}