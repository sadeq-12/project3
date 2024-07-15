let iconButton = document.querySelector("#menuButton")
let closeButton = document.querySelector("#closeButton")
let ulElement = document.querySelector("#links")
let buttons = document.querySelector("#Buttons")


iconButton.addEventListener("click" ,function(){
    ulElement.style.display = "flex"
    buttons.style.display = "block"
    iconButton.style.display = "none"
    closeButton.style.display = "block"
})


closeButton.addEventListener("click" , function(){
    ulElement.style.display = "none"
    buttons.style.display = "none"
    iconButton.style.display = "block"
    closeButton.style.display = "none"

})