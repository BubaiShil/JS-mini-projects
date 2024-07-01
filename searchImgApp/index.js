const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData=""
let page = 1

async function showResults(){
    inputData = searchInputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}` 

    const response = await fetch(url)
    const result = await response.json()

    //console.log(result);

    if(page === 1){
        searchResultsEl.innerHTML = " "
    }


    const data = result.results

    data.map((datas)=>{
        const imageWrapp = document.createElement("div")
        imageWrapp.classList.add("search-result");
        
        const imgContainer = document.createElement("img")
        imgContainer.src = datas.urls.small
        imgContainer.alt = datas.alt_description

        const DescWrapp = document.createElement("a")
        DescWrapp.href = datas.links.html
        DescWrapp.target = "_blank"
        DescWrapp.textContent = datas.alt_description

        imageWrapp.appendChild(imgContainer)
        imageWrapp.appendChild(DescWrapp)
        searchResultsEl.appendChild(imageWrapp)


       

    })

    page++

    if (page > 1) {
        showMoreButtonEl.style.display = "block";
      }
}
    


formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1
    showResults()
})

showMoreButtonEl.addEventListener("click", () => {
    showResults();
})