function toggleMenu() {
    const menu =document.querySelector(".menu-links"); 
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



function redirectToContact() {
    window.location.href = 'Linkedin.com'; // Replace with the actual path or ID you want to navigate to
  }
  const textElement = document.getElementById('typewriter');
const text = "Data Analyst and an AI enthusiast";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed (milliseconds)
    }
}

typeWriter();
'use strict';

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 80;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();

