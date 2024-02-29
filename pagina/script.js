// let darkmode = document.querySelector('#darkmode');

// darkmode.onclick = () => {
//     if (darkmode.classList.contains('bx-moon')) {
//         darkmode.classList.replace('bx-moon', 'bx-sun');
//         document.body.classList.add('color');
//     } else {
//         darkmode.classList.replace('bx-sun', 'bx-moon');
//         document.body.classList.remove('color');
//     }
// };

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '70px',
    duration: 2700,
    reset: true
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.navlist a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href'); // Obtener el ID del objetivo del enlace
            const targetSection = document.querySelector(targetId); // Seleccionar la sección correspondiente

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
            }
        });
    });
});

const filters = document.querySelectorAll('.filters span');

for (let filter of filters) {
    filter.addEventListener('click', function () {
        for (let i of filters) {
            i.classList.remove('active');
        }
        filter.classList.add('active');
    })
}



document.querySelector("#loginbtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});


document.querySelector("#registrobtn").addEventListener("click", function () {
    document.querySelector("#register").classList.add("active");
});


document.querySelector("#register .close-btn").addEventListener("click", function () {
    document.querySelector("#register").classList.remove("active");
});






