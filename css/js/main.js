const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

const observerCounter = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            startCounter(entry.target);
            observerCounter.unobserve(entry.target);
        }

    });

});

counters.forEach(counter => {
    observerCounter.observe(counter);
});
contst fadeElements = document.querySelectorAll(".fade-in");

const observerFade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
fadeElements.forEach(el => {
    observerFade.observe(el);
});
// Compteurs animés
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter,20);
                }else{
                    counter.innerText = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// Fade-in des sections
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
const filterButtons = document.querySelectorAll(".filter-btn");
const freelancers = document.querySelectorAll(".freelancer");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        freelancers.forEach(card => {

            if(filter === "all"){
                card.style.display = "block";
            }
            else if(card.classList.contains(filter)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });
});
const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if(name.value.trim() === ""){
        document.getElementById("nameError").innerText = "Nom obligatoire";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)){
        document.getElementById("emailError").innerText = "Email invalide";
        valid = false;
    }

    if(message.value.trim().length < 20){
        document.getElementById("messageError").innerText =
        "Le message doit contenir au moins 20 caractères";
        valid = false;
    }

    if(valid){
        document.getElementById("successMessage")
        .classList.remove("d-none");

        form.reset();
    }

});

}