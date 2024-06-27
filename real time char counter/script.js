const text =  document.querySelector("textarea")
const total = document.getElementById("total-char")
const remain = document.querySelector(".remain-char")



text.addEventListener("keyup",()=>{
    totalchar()
    console.log("key daone");
})


function totalchar (){
    const length= text.value.trim().length
    total.innerText = length
    remain.innerText = 60-length
    console.log(length);
}
