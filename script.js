// This is selecting area
let gameicon = document.querySelectorAll(".gameicon")
let gameshowing = document.querySelector(".bottom-game-container")
let resultshowing = document.querySelector(".bottom-result-container")
let result_user_pc = document.querySelectorAll(".resulticon")
let win_or_lost_shown = document.querySelector(".div2")
let win = document.querySelector(".user")
let loose = document.querySelector(".pc")
let userscore = document.querySelector(".userscore h1")
let pcscore = document.querySelector(".pcscore h1")
let nextbuttonappend = document.querySelector(".rules-next")
let nextshowingbutton = document.querySelector(".rules-next").children

//Initialization or resetting area
let resulobj = {
    "00": "draw", "01":"win", "02":"loose", "10":"loose", "11":"draw", "12":"win",
    "20":"win", "21":"loose", "22":"draw"
}

let userandpcscore = {
    user : JSON.parse(localStorage.getItem("user")),
    pc : JSON.parse(localStorage.getItem("pc"))
}

userscore.textContent = userandpcscore.user || 0
pcscore.textContent = userandpcscore.pc || 0

//MAIN LOGIC START

win_or_lost_shown.children[2].addEventListener("click", ()=>{
    resultshowing.style.display="none"
    gameshowing.style.display="flex"
    nextshowingbutton[1].style.display = "none"
})

gameicon.forEach(gameiconelement => {
    gameiconelement.addEventListener("click", () =>{
        resultshowing.style.display="flex"
        gameshowing.style.display="none"
        let randomvalue = Math.floor(Math.random() * 3)
        result_user_pc[0].innerHTML = gameiconelement.innerHTML
        result_user_pc[1].innerHTML = gameicon[randomvalue].innerHTML
        let result = resulobj[gameiconelement.classList[2] + randomvalue]
        win_or_lost_shown.children[1].textContent = "AGAINST PC"
        win_or_lost_shown.children[2].textContent = "PLAY AGAIN"
        if(result == "loose"){
            win.style.display = "none"
            loose.style.display = "flex"
            win_or_lost_shown.children[0].textContent = "YOU LOST"
            userandpcscore.pc += 1
            localStorage.setItem("pc", JSON.stringify(userandpcscore.pc))
            pcscore.textContent = userandpcscore.pc
        }else if(result == "win"){
            loose.style.display = "none"
            win.style.display = "flex"
            win_or_lost_shown.children[0].textContent = "YOU WIN"
            console.log(win_or_lost_shown.children[0]);
            userandpcscore.user += 1 
            localStorage.setItem("user", JSON.stringify(userandpcscore.user))
            userscore.textContent = userandpcscore.user
            nextshowingbutton[1].style.display = "block"
        }else{
            loose.style.display = "none";
            win.style.display = "none"
            win_or_lost_shown.children[0].textContent = "TIE UP"
            win_or_lost_shown.children[1].textContent = ""
            win_or_lost_shown.children[2].textContent = "REPLAY"
        }
    })
})