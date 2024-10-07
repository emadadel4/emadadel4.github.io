
let dark = localStorage.getItem('dark')

const ThemeToggle = document.getElementById('theme-toggle');

const EnableDarkMode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark','active')
}

const DisableDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark',null)
}


if(dark === "active") EnableDarkMode()

ThemeToggle.addEventListener("click", () => {

    dark = localStorage.getItem("dark")
    dark !== "active" ? EnableDarkMode() : DisableDarkMode()
})
