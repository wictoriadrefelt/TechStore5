var listOfProducts = [];
var cart = []; 
var cartItems;

cart = localStorage.getItem('cart');

cart = JSON.parse(localStorage.getItem('cart'));

function getItems(){
    //let cart = JSON.parse(localStorage.getItem('cart'))
    for(let i = 0 ; i < cart.length ; i++ ) {
        let cartItem = cart[i]  
        console.log(cartItem.product.title)
       
    }}
    getItems();

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
        numberOfProducts.innerText = '2'
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
    let totalPayment= document.createElement("h3");
    totalPayment.classList.add("paymentDiv");
    totalPayment.innerHTML =`
    <div>Total price:31975 kr</div>
    <div><button> Finish your payment </button></div>`;
    h3.append(totalPayment)
};