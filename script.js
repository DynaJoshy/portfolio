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

