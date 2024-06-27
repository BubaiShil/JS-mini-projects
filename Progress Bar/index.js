const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");


let currentstep = 1

nextEl.addEventListener("click", () => {
    currentstep++
    //console.log(currentstep);
    if (currentstep > stepsEl.length) {
        currentstep = stepsEl.length

    }
    //console.log(" after " + currentstep);
    udateProgresss()
})

prevEl.addEventListener("click", () => {
    currentstep--
    //console.log(currentstep);
    if (currentstep < 1) {
        currentstep = 1
    }

    udateProgresss()
   // console.log(currentstep);
})


function udateProgresss() {
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentstep) {
            stepEl.classList.add("checked")
            stepEl.innerHTML = `
                <i class="fas fa-check"></i>
                <large>${idx === 0
                    ? "Start"
                    : idx === stepsEl.length - 1
                        ? "Final"
                        : "Step " + idx
                }</large>
            `
        } else {
            stepEl.classList.remove("checked")
            stepEl.innerHTML = `
            <i class="fas fa-times"></i>
            `;
        }
        
    })

    //console.log(stepsEl);
    const checkedNumber = document.querySelectorAll(".checked");

    progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";


    if(currentstep === 1){
        prevEl.disabled = true
    }else if(currentstep === stepsEl.length){
       nextEl.disabled = true
    }else{
        prevEl.disabled = false
        nextEl.disabled = false
    }

}
