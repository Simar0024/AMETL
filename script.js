const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const tour = document.querySelector('.tour-btn');
const video = document.querySelector('.tour-video');
const form = document.querySelector('.my-form');
let current = 0;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
}

function nextSlide() {
    showSlide((current + 1) % slides.length);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

function showVideo() {
    video.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("my-form");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .then(data => {
        alert('Form submitted successfully! Redirecting...');
        form.reset(); 

        setTimeout(() => {
          window.location.href = "/"; 
        }, 3000);
      })
      .catch(error => {
        setTimeout(() => messageDiv.innerHTML = "", 3000);
      });
  });
});