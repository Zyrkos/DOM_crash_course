const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//Add item
function addItem(e){
    e.preventDefault();

    //get input value
    const newItem = document.getElementById('item').value;

    //create new li element
    const li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.append(document.createTextNode(newItem));
    
    //create del button element
    const deleteBtn = document.createElement('button');

    //add classes to del buton
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.append(document.createTextNode('X'));
    //append buton to li
    li.append(deleteBtn);
    //append li to list
    itemList.append(li);


}