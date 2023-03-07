const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activeHamburger");
    mobileNav.classList.toggle("mobileActive");
});

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("activeHamburger");
    mobileNav.classList.remove("mobileActive");
}))