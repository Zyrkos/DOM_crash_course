const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//Add item
function addItem(e){
    e.preventDefault();

    console.log(1);
}