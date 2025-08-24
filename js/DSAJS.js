function flipBottle(event){
    let bottle=document.querySelector(".color-2");
    bottle.classList.remove("color-2");
}
let clickingBottle=document.getElementById("touch-1");
clickingBottle.addEventListener("click",flipBottle);