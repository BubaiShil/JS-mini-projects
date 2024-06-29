const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click",()=>{
    socialListsEl.classList.toggle("hide")
    menuEl.classList.toggle("rotate")
})


liEls.forEach((lists)=>{
    lists.addEventListener("click",()=>{
        menuTextEl.innerHTML= lists.innerHTML
        socialListsEl.classList.toggle("hide")
        menuEl.classList.toggle("rotate")
    })
})