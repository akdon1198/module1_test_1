let rulesshowingbutton = document.querySelector(".rules-next").children
let rulespopup = document.querySelector(".rules-card")
let rulescancelbutton = document.querySelector(".rules-card div")

rulesshowingbutton[0].addEventListener("click", ()=>{
    console.log("clicked");
    rulespopup.style.display = "block"
})

rulescancelbutton.addEventListener("click", ()=>{
    rulespopup.style.display = "none"
})