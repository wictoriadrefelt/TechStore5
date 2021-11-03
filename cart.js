var listOfProducts = [];



function initSite() {
    loadProducts();
    
    // This would also be a good place to initialize other parts of the UI
}

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        
        createHeader();
    });
}

function createHeader(){
const head = document.getElementsByTagName('header')[0];
let headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    head.appendChild(headerDiv)

let titleDiv = document.createElement('a')
    titleDiv.classList.add('techStoreDiv')
    let titleLink = document.createTextNode('TechStore')
    titleDiv.appendChild(titleLink)
    titleDiv.title = 'TechStore';
    titleDiv.href = 'index.html';
    headerDiv.appendChild(titleDiv)
    
    createProduct();

    
function createProduct() {  
let numberOfProducts = document.createElement('div')
    numberOfProducts.classList.add('numberOfProductsCount')
    numberOfProducts.id = 'numberOfProductsCount'
    numberOfProducts.innerText = '0'
    headerDiv.appendChild(numberOfProducts)

let cartIcon = document.createElement('div')
    cartIcon.classList.add('cartIcon')
    let cartImage = document.createElement('img')
    cartImage.classList.add('cartImage')
    cartImage.src = './images/cart.png'
    cartIcon.appendChild(cartImage)
    headerDiv.appendChild(cartImage)
}
}



/*
//Creating pop up button 
const main = document.getElementsByTagName("main")[0];
let buttonholder = document.createElement('div');
buttonholder.classList.add('mpopup')
buttonholder.id = 'mpopupBox';
console.log(buttonholder)
let mpopupContent = document.createElement('div');
 mpopupContent.classList.add('mpopup-content')
let mpopupHead = document.createElement('div')
mpopupHead.classList.add('mpopup-head')
let btnClose = document.createElement('span')
btnClose.classList.add('close')
btnClose.innerText = 'X'
let purchaseBtn = document.createElement("button");
purchaseBtn.classList.add('mpopupButton')
//buttonholder.addEventListener('click', () => {confirmPurchase()});
purchaseBtn.innerHTML = "Click Me";
purchaseBtn.id = 'mpopupButton'

main.appendChild(buttonholder, mpopupContent, mpopupHead, mpLink, btnClose, purchaseBtn)

*/

function confirmPurchase() {
    
    alert('Purchase completed. Thank you for your order!');
  }



// TODO, ADD TO BUTTON AND CONNECT TO PURCHASE BUTTON
// Clears local storage
function clearAllItems(){
    localStorage.clear() 
}

let cart = JSON.parse(localStorage.getItem('cart'))


// Removes item from cart 
// LOOK IN TO THIS MORE 
function removeItem(){
for (var i =0; i< items.length; i++) {
    var item = JSON.parse(items[i]);
    if (item.title == item.title) {
        items.slice(i);
        break;
    }
}
}

// Access items from cart 
function getItems(){
//let cart = JSON.parse(localStorage.getItem('cart'))
for(let i = 0 ; i < cart.length ; i++ ) {

    let cartItem = cart[i]  
    console.log(cartItem.product.title)
    console.log(cartItem.product.quantity)
    console.log(cartItem.product.description)
    
}}

getItems();

// Calculate total sum for cart. Returns total amount. 
function totalPrice(){
//let cart = JSON.parse(localStorage.getItem('cart'))
    let amount = cart.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
    console.log(amount)
    return amount
}

function displayCartAmount() {

    //innerText = ""
    numberOfProductsCount = document.getElementById('numberOfProductsCount')
    
    
    let cart = localStorage.getItem("cart")
    if(cart){
        cart = JSON.parse(cart)
    
    const total = cart.reduce((nr, product) => nr + product.quantity, 0);
        console.log(total, 'h')
        //TODO ---- GET THIS TO WORK. ONLY DISPLAYS IN CONSOLE
        // CANT GET IT TO CHANGE JS RENDERED ELEMENT, ONLY HTML DIV
        clockTitle.innerText = total
        return total
    }
}
window.onload(totalPrice(), displayCartAmount())