var listOfProducts = [];





function initSite() {
    loadProducts();
    secondHeader();
    paymenFooter();
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
    amount = displayCartAmount();
    numberOfProducts.innerText = amount;
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
        items.slice(i, 1);
        console.log(items)
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
    //display.innerText = amount;
    console.log(amount)
    return amount
    
}


/*
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
        numberOfProductsCount.innerText = total
        return total
    }
}
*/
window.onload(totalPrice())

        
    function createProduct() {  
    let numberOfProducts = document.createElement('div')
        numberOfProducts.classList.add('numberOfProductsCount')
        numberOfProducts.id='numberOfProductsCount'
        amount = displayCartAmount();
        numberOfProducts.innerText = amount;
        headerDiv.appendChild(numberOfProducts)
    
    let cartIcon = document.createElement('div')
        cartIcon.classList.add('cartIcon')
        let cartImage = document.createElement('img')
        cartImage.classList.add('cartImage')
        cartImage.src = './images/cart.png'
        cartIcon.appendChild(cartImage)
        headerDiv.appendChild(cartImage)
    }
    

function secondHeader (){
    const h2 = document.querySelector("h2");
    let secondHeader = document.createElement("h2");
    secondHeader.classList.add("secondHeaderDiv");
    secondHeader.innerText=`Shopping Cart`;
    h2.append(secondHeader)
};

// Access items from cart
function getItems() {
    const main = document.getElementsByTagName("main")[0];

    cart.forEach((cartItem) => {
        let cartPage = document.createElement("div");
        cartPage.classList.add("cartDiv");
        main.append(cartPage);

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("cartImgDiv");
        let img = document.createElement("img");
        img.src = "./images/" + cartItem.product.image;
        imgDiv.appendChild(img);
        main.append(imgDiv);

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("titleContainer");
        let title = document.createElement("title");
        titleContainer.innerText = cartItem.product.title;
        titleContainer.appendChild(title);
        main.append(titleContainer);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add("pricediv");
        let price = document.createElement("price");
        priceDiv.innerText = cartItem.product.price + " kr";
        priceDiv.appendChild(price);
        main.append(priceDiv);

        let delContainer = document.createElement("div");
        delContainer.classList.add("deldiv");
        let removebutton = document.createElement("button");
        removebutton.classList.add("delBtnDiv")
        removebutton.innerText= `Remove`
        delContainer.appendChild(removebutton)
        main.append(delContainer);

        cartPage.append(imgDiv, titleContainer, priceDiv, delContainer);
    });
}

function paymenFooter (){
    const h3 = document.querySelector("h3");

    let totalPayment= document.createElement("div");
    totalPayment.classList.add("paymentDiv"); 
    total = document.createElement('div')
    totalAmount = totalPrice();
    total.innerText = 'Total amount:' + ' ' + totalAmount;

    purchaseBtn=document.createElement("button")
    purchaseBtn.id='purchaseBtn';
    purchaseBtn.innerText='Finish your payment'
    totalPayment.append(total, purchaseBtn)
    h3.append(totalPayment);
    
};

function displayCartAmount() {
    numberOfProductsCount = document.getElementById('numberOfProductsCount')
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)

    if(cart!== null){
        const total = cart.reduce((nr, product)=> nr + product.quantity, 0);
        return total
    }else{
        total = 0;
        return total
    }
}

    function totalPrice(){
        totalPayment = document.querySelector('totalPayment')
        let cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
    //let cart = JSON.parse(localStorage.getItem('cart'))
        let amount = cart.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
        //display.innerText = amount;
        console.log(amount)
        return amount
    }




function displayCartAmount() {

    //innerText = ""
    numberOfProductsCount = document.getElementById('numberOfProductsCount')
    
    let cart = localStorage.getItem("cart")
    cart = JSON.parse(cart)
    
    if(cart){
        
        //TODO ---- GET THIS TO WORK. ONLY DISPLAYS IN CONSOLE
        // CANT GET IT TO CHANGE JS RENDERED ELEMENT, ONLY HTML DIV
        const total = cart.reduce((nr, product) => nr + product.quantity, 0);
        return total
        
    }
}    

