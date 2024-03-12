let antia="yellow"
let btn=document.querySelector(".btn");
btn.addEventListener("click",changecolor)
function changecolor(){
    if(antia==="yellow"){
        document.querySelector(".go").style.background="green"
        document.querySelector(".prepare").style.background="grey"
        antia="green"
        return;
        
    }
    if(antia==="green"){
        document.querySelector(".go").style.background="grey"
        document.querySelector(".stop").style.background="red"
        antia="red"
        return;
    }
    if(antia==="red"){
        document.querySelector(".stop").style.background="grey"
        document.querySelector(".prepare").style.background="yellow"
        antia="yellow"
        return
    }
}