

// btns get
const run_btn = document.querySelector('.run_btn');

// gradient get
const gradient_line = document.querySelector(".intelligence_gradient_container > span");


// main heading get
const main_heading = document.querySelector(".intelligence_main-heading > h2");
// note text get
const note = document.querySelector(".note");



window.onload = () => {

// callback function 
showText();

// initial trigger value
let trigger = true;


// click event for RUN BTN
run_btn.addEventListener("click",(event)=>{

    if(trigger){

        gradient_line.style.backgroundSize = "100% 20%";
        event.target.innerText = "Bye!!";
        trigger = false;

    }else{

        gradient_line.style.backgroundSize = "100% 0%";
        event.target.innerText = "Click Me";
        trigger = true;

        setTimeout(()=>{
            gradient_line.style.backgroundSize = "0% 0%";
        },1000);
        
    }

})
   

};


// function excute
const showText = () =>{

   main_heading.classList.add("showText");
   note.classList.add("showText");
   run_btn.classList.add("showText");

}

