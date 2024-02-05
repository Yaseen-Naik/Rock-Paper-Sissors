let buttons=document.querySelectorAll(".button1");
let buttons2=document.querySelectorAll(".button2");
let result=document.querySelector(".result_txt")
let count_you=document.querySelector(".count_js1")
let count_cmp=document.querySelector(".count_js2")
let reset=document.querySelector(".startover")
let you,computer,a,countC=0,countP=0;
let chk_results=()=>{
    if (you===computer){
result.innerText="Draw"
    }
    if (you=="r" && computer=="p" || you=="p" && computer=="s" || you == "s" && computer=="r"){
result.innerText="Computer Won"
countC++;
addcount();
    }
    if (you=="r" && computer =="s" || you=="p" && computer=="r" || you=="s" && computer=="p"){
result.innerText="You Won"
countP++;
addcount();
    }
}
let comp_index=()=>{
    a=Math.floor(Math.random()*3);
}
let computes_turn=()=>{
    comp_index();
if(a===0){
    computer="r";
    console.log(computer);
    buttons2[0].style.transform="scale(.8)"
    buttons2[1].style.transform="scale(1)"
    buttons2[2].style.transform="scale(1)"
    buttons2[0].style.border="5px solid green";
    buttons2[1].style.border="none";
    buttons2[2].style.border="none";

    chk_results();
}
if(a===1){
    computer="p";
    console.log(computer);
    buttons2[1].style.transform="scale(.8)"
    buttons2[0].style.transform="scale(1)"
    buttons2[2].style.transform="scale(1)"
    buttons2[1].style.border="5px solid green";
    buttons2[0].style.border="none";
    buttons2[2].style.border="none";

    chk_results();
}
if(a===2){
    computer="s";
    console.log(computer);
    buttons2[2].style.transform="scale(.8)"
    buttons2[0].style.transform="scale(1)"
    buttons2[1].style.transform="scale(1)"
    buttons2[2].style.border="5px solid green";
    buttons2[0].style.border="none";
    buttons2[1].style.border="none";

    chk_results();
}
}
buttons[0].addEventListener("click",pass_val=()=>{
    you="r";
    computes_turn();
});
buttons[1].addEventListener("click",pass_val=()=>{
    you="p";
    computes_turn();
});
buttons[2].addEventListener("click",pass_val=()=>{
    
    you="s";
    computes_turn();
});
let addcount=()=>{
count_cmp.innerText=countC;
count_you.innerText=countP;
}
let reset_done=()=>{
    countC=0;
    countP=0;
    count_cmp.innerText="0";
    count_you.innerText="0";
    buttons2[2].style.transform="scale(1)"
    buttons2[0].style.transform="scale(1)"
    buttons2[1].style.transform="scale(1)"
    buttons2[2].style.border="none";
    buttons2[0].style.border="none";
    buttons2[1].style.border="none";
    result.innerText="..."
}
reset.addEventListener("click",reset_done)
