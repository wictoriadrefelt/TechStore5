

/* function to add counter to shopping cart 
use on button with onclick*/

let addItem = 0; 

function addItemToCart() {
    addItem += 1;
    document.getElementById('added-articles').innerHTML = addItem; 
    
};
