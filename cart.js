var listOfProducts = [];





function initSite() {
    loadProducts();
    ifEmpty();
    
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
    if(amount){
        numberOfProducts.innerText = amount;
    }else{
        numberOfProducts.innerText = '0'
    }
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


function confirmPurchase() {
    
    alert('Purchase completed. Thank you for your order!');
    clearAllItems()
    displayCartAmount()
    window.location.reload()
    
  }




// Clears local storage
function clearAllItems(){
    
    localStorage.removeItem('cart')
}

let cart = JSON.parse(localStorage.getItem('cart'))





function secondHeader (){
    const h2 = document.querySelector("h2");
    let secondHeader = document.createElement("h2");
    secondHeader.classList.add("secondHeaderDiv");
    let cartInBlack = document.createElement('img')
    cartInBlack.classList.add('cartInBlack')
    cartInBlack.src = './images/shopping-cart-black-shape.png' 
    secondHeader.innerText=`Kundvagn`;
    h2.append(cartInBlack, secondHeader)
};

// Checks if cart is empty and if so, displays message
function ifEmpty(){
    let j = 0
    while (j == 0){
    if(!cart){
        const main = document.getElementsByTagName("main")[0];
    let cartPage = document.createElement("div");
        cartPage.classList.add("container");
        main.append(cartPage);
        
            let container = document.createElement('div');
            container.innerText = 'Kundvagnen är tom'
            cartPage.append(container)
            j = 1
            return
           
        }else{
        getItems();
        paymentFooter();
        secondHeader();
        j = 1
        }
}}

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
        let trashcanPic = document.createElement("img")
        trashcanPic.classList.add("trashCan")
        trashcanPic.src = './images/trash can.png' 
        removebutton.title = cartItem.product.title;
        removebutton.innerText= ` Ta bort `
        removebutton.addEventListener('click', function() 
        {deleteItem(this.title)})
        delContainer.append(trashcanPic, removebutton)
        main.append(delContainer);

        cartPage.append(imgDiv, titleContainer, priceDiv, delContainer);
});
}

function paymentFooter (){
    const h3 = document.querySelector("h3");

    let totalPayment= document.createElement("div");
    totalPayment.classList.add("paymentDiv"); 
    total = document.createElement('div')
    total.classList.add("priceDiv")
    totalAmount = totalPrice();
    total.innerText = 'Totalt pris:' + ' ' + totalAmount + " kr";

    let purchaseBtn = document.createElement('button')
    let checkBox = document.createElement('img')
    purchaseBtn.id = 'purchaseBtn'; 
        checkBox.classList.add('checkBox')
        checkBox.src = './images/checked.png' 
   
    purchaseBtn.addEventListener("click", function() {
        confirmPurchase()
        clearAllItems()
      });

      let tickPic= document.createElement('img')
      tickPic.classList.add('tickPic')
      tickPic.src = './images/checkmark-128.png' 
      purchaseBtn.append(tickPic,' Slutför ditt köp' )

    totalPayment.append(total, purchaseBtn)
    h3.append(totalPayment)

    }




// Calculate total sum for cart. Returns total amount. 
function totalPrice(){
    let amount = cart.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
    
    console.log(amount)
    return amount
    
}

// Displays number of articles in cart. 
function displayCartAmount() {
    numberOfProductsCount = document.getElementById('numberOfProductsCount')
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)

    if(cart!== null){
        const total = cart.reduce((sum, product)=> sum + product.quantity, 0);
        return total
    }else{
        total = 0;
        return total
    }
}


// Deletes product in cart 
function deleteItem(title) {

    let toRemove = title;

   for (let i = 0; i < cart.length; i++) {

       if (toRemove == cart[i].product.title) {

               if(cart[i].quantity == 1) {
               cart.splice(i, 1);
               alert('Product has been removed')
               displayCartAmount()
           } else {
               cart[i].quantity--
               let phonename = cart[i].product.title
               alert('One' + ' ' + phonename + ' ' + 'removed from cart')
               displayCartAmount()
           }
            
               localStorage.setItem("cart", JSON.stringify(cart)); 

               deleted();
               updatePrice(this.price);
       }
   } 
}

// Displays total price
function updatePrice(price) {

    let toUpdate = price;

   for (let i = 0; i < cart.length; i++) {

       if (toUpdate == cart[i].product.price) {

               if(cart[i].price == 1) {
               return price
           } else {
               cart[i].price - cart[i].price
               return price
           }
            
               
       }
   } 
}



function deleted() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == [] || cart == "") {
        
        cart = JSON.parse(localStorage.getItem("cart"));
        
        clearAllItems()
        window.location.reload()

        

    } 
   displayCartAmount()
}
