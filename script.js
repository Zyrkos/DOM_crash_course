const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

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

function removeItem(e){
    //we want the event to only delete when we press the X, not the item itself
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}

//filter items
function filterItems(e) {
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    //get LIs
    const items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        //We then want to compare if the input of the search bar is equal to the values in the list
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}