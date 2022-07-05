//traversing the DOM//

const itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = '#f4f4f4';

//EVENTS


/* const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
} */


const button = document.getElementById('button');
const box = document.getElementById('box');

//getting the position of the mouse and do things with it:
//box.addEventListener('mouseover', runEvent);



const itemInput = document.querySelector('input[type="text"]' );
const form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    //TRACKS mouse movement and displays values on "output"//
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';


    //CHANGES color of the box based on the position of the mouse
    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

