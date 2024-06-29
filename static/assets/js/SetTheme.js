const mode = localStorage.getItem("mode") || ""
const toogle = document.querySelector(".theme-toggle")
const body = document.querySelector("body")


document.body.className = mode;

toogle.addEventListener("click", ()=>{

    localStorage.setItem("mode", mode === "light" ? "" : "light")
    body.classList.toggle("dark")
})