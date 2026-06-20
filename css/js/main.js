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