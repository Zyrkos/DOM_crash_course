

//EVENTS


/* const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
} */


const button = document.getElementById('button');
const box = document.getElementById('box');

//GETTING the position of the MOUSE and do things with it:
//box.addEventListener('mouseover', runEvent);


//GETING input from KEYDOWN event
/* const itemInput = document.querySelector('input[type="text"]' );
const form = document.querySelector('form'); */

/* itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent); */


itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);






function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    
    //document.getElementById('output').innerHTML = '<h3>' +e.target.value+'</h3>';

    //TRACKS mouse movement and displays values on "output"//
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';


    //CHANGES color of the box based on the position of the mouse
    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

