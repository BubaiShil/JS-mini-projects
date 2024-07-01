const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1
let time;


nextEl.addEventListener("click",()=>{
    currentImg++
    clearTimeout(time)
    updateImg()
    //console.log("press");
})

prevEl.addEventListener("click",()=>{
    currentImg--
    clearTimeout(time)
    updateImg()
})

updateImg()

function updateImg() {

    if(currentImg>imgsEl.length){
        currentImg = 1
    }else if(currentImg<1){
        currentImg = imgsEl.length
    }

    imageContainerEl.style.transform = `translate(-${(currentImg - 1) *500}px)`
    time = setTimeout(()=>{
        currentImg++
        updateImg()
    },3000)
    //console.log("up");
}