
var listOfProducts = [];
var cart = []; 

function initSite() {
    loadProducts();
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
    let counter = document.querySelector('#numberOfProductCount')
    headerDiv.append(counter)
    let cartIcon = document.createElement('div')
    cartIcon.classList.add('cartIcon')
    let cartImage = document.createElement('img')
    cartImage.classList.add('cartImage')
    cartImage.src = './images/cart.png'
    cartIcon.append(cartImage)
    headerDiv.append(cartImage)
    if(cartImage){
        {
            cartImage.onclick = function(e) {
              document.location = "shoppingCart.html";
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
        let paragrahTwo = document.createElement("p2");
        paragrahTwo.classList.add('display')
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
        addToCartText.innerText =`Lägg till i kundvagnen`
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
        let numberOfProductsCount = document.getElementById('numberOfProductsCount')

    
        let cart = localStorage.getItem("cart")
    
        if(cart) {
            cart = JSON.parse(cart)
        } else { 
            cart = []
        }
    
        let totalSum = cart.reduce((sum,item) => sum + item.quantity, 0);
        
        numberOfProductsCount.textContent = totalSum
    
     }

