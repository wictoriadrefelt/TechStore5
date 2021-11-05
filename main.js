
var listOfProducts = [];
var cart = []; 


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
        addProductsToWebpage();
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
    amount = displayCartAmount() 
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
    cartImage.innerHTML = "fas fa-shopping-cart"
    cartIcon.appendChild(cartImage)
    headerDiv.appendChild(cartImage)
    if(cartImage){
        {
            cartImage.onclick = function(e) {
              document.location = "shoppingCart.html";
            }
          }
    }
}
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    const main = document.getElementsByTagName("main")[0];
    
    listOfProducts.forEach((product) => {
        
        


        let productCard = document.createElement("div");
        productCard.classList.add("carddiv")
        main.append(productCard)

        // Representing the title of a productCard

        let headerContainer = document.createElement("div");
        headerContainer.classList.add("titlediv")
        let header = document.createElement("h2");
        header.innerText = product.title
        headerContainer.appendChild(header)   
        main.append(headerContainer)
        
        // Representing the description of a productCard

        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("desdiv")
        let paragrahOne = document.createElement("p");
        paragrahOne.innerText = product.description
        descriptionContainer.appendChild(paragrahOne)   
        main.append(descriptionContainer)

        // Representing the image of a productCard

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgdiv")
        let img = document.createElement("img")
        img.src = "./images/" + product.image
        imgContainer.appendChild(img)
        main.append(imgContainer)

       // Representing the price of a productCard
        let priceContainer = document.createElement("div");
        priceContainer.classList.add("pricediv")
        let  paragrahTwo= document.createElement("p2");
        paragrahTwo.innerText = product.price+" kr"
        priceContainer.appendChild(paragrahTwo)
        main.append(priceContainer)

        // Representing the btnContainer of a productCard 
        let btnContainer = document.createElement("div");
        let paragraphThree=document.createElement("button");
        paragraphThree.classList.add("btndiv")
        let cartPic = document.createElement('img')
        cartPic.classList.add('cartImageInMain')
        cartPic.src = './images/cart-arrow.png' 
        let addToCartText = document.createElement("text")
        addToCartText.classList.add('text')
        addToCartText.innerText =`Add to cart`
        paragraphThree.append(cartPic, addToCartText)
        /* paragraphThree.innerText = cartImage  */
        /*
        paragraphThree.className = 'addItemToCartbtn';
        paragraphThree.id = 'purchase'
        */
        // Allows the button to be clicked and ads product
        update = displayCartAmount()
        
        paragraphThree.addEventListener('click', () => {addToCart(product), update
        console.log(product, update, 'this is it')}) 
        
        btnContainer.appendChild(paragraphThree)
        main.append(btnContainer)

        productCard.append(headerContainer, descriptionContainer, imgContainer,  priceContainer, btnContainer); 
  })

};


// Add product to cart. 
// Located index of item (if exists) and 
function addToCart(product) {     
    let cart = localStorage.getItem("cart")
    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }
    
    displayCartAmount() 

    let index = cart.findIndex((cartItem) => {
    
        return cartItem.product.title == product.title
              
    })

        if(index < 0) {
            cart.push({
                product: product, 
                quantity: 1
     })
        } else {
            cart[index].quantity++
        }

        localStorage.setItem("cart", JSON.stringify
        (cart));
    
    }



function displayCartAmount() {

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








/*
function addToCart(item){

if(JSON.parse(localStorage.getItem('products')) === null){
    products = [];
    products.push(item);
    localStorage.setItem("products",JSON.stringify(items));
    
}else{
    const localItems = JSON.parse(localStorage.getItem("products"));
    localItems.map(data=>{
        if(item.id == data.id){
            item.no = data.no + 1;
        }else{
            products.push(data);
        }
    });
    products = [];
    products.push(item);
    localStorage.setItem('products',JSON.stringify(products));
    
}}


*/





/*
function addToCart(prod){
    
            let cart = localStorage.getItem('products')
            console.log(cart, 'inspect')
            if(cart){
                cart = JSON.parse(cart);
                console.log(cart)
            }else{
                cart = [];
                cart.push(prod)
                localStorage.setItem('products', JSON.stringify(prod))
                
            }
           
        }
*/