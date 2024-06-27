const img_body=document.querySelector(".img-container")
const btn=document.querySelector("button")

btn.addEventListener('click',()=>{
    addIMG()
})

const addIMG = ()=>{
    for (let index = 1; index <= 5; index++) {
    const addnewimg = document.createElement("img")
    addnewimg.src= `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`
    img_body.appendChild(addnewimg)
    }
}