
var listOfProducts = [];
var cart = []; 
var cartItems;

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
        paragraphThree.addEventListener('click', () => {addToCart(product)
        console.log(product, 'this is it')}) 
        
        btnContainer.appendChild(paragraphThree)
        main.append(btnContainer)

        productCard.append(headerContainer, descriptionContainer, imgContainer,  priceContainer, btnContainer); 
  })

};

function addToCart(product){
    let cart = localStorage.getItem('cart')
    

    if(cart){
        cart = JSON.parse(cart)
        

    }else{
        cart = []; 
    }
    cart.push({
        product: product, 
        quantity: 1})
        //console.log(cart, 'hej')
        localStorage.setItem('cart', JSON.stringify(cart))
        let index = cart.forEach((cartItem) => {
            if(cartItem.product.title == product.title){
                console.log('tjenis')
                console.log('hej mamma')
            }
            

        })
    }
    function findIndex(){
    let index = cart.findIndex((cartItem) =>{
        if(cartItem.product.name == product.name ){
            console.log('hej')
            return True
        }
        // return cartItem.product.name == product.name
    } )
}
    



/*
var addItem = function (title) {
    var oldItems = JSON.parse(localStorage.getItem('cart')) || [];
    var match = oldItems.find(function (item) {
        return item['title'] === title;
    });
    if (match) {
        match[product] += product,
        match[quantity] +=quantity++
    } else {
        var newItem = {
            'title': title,
            'quantity': quantity,
        };
        oldItems.push(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(oldItems));
};
/*
function addToCart(product){
    let cart = [];
let index = cart.findIndex((cartItem) =>{
    if(cartItem.product.name == product.name ){
        return True
    }
    // return cartItem.product.name == product.name
} )


if(index < 0){
    cart.push({
        product: product,
        quantity: 1, })
    }else{
    cart[index].quantity++
    }


console.log(cart)
cart.push(product)
console.log(cart)

localStorage.setItem('cart', JSON.stringify(cart))   
}


/*
function addToCart(product){
    let cart = localStorage.getItem('cart')
    

    if(cart){
        cart = JSON.parse(cart)
        console.log('cart', cart)

    }else{
        cart = []; 
    }
    cart.push({
        product: product, 
        quantity: 1
    }
        )
    console.log(cart, 'hej')
    localStorage.setItem('cart', JSON.stringify(cart))
}  


cart.forEach((cartItem) => {
    console.log(cartItem)
});       
    




/*

function loopOver(){
let products = document.querySelector('.addItemToCartbtn')
for(var i = 0;i < products.length;i++){
    products[i].addEventListener('click', () => {addToCart(product)})
    console.log(products[i], + 'hej')

}}




function addToCart(prod){
    let products = getProducts();
    products.push(prod);
    //console.log(prod)
    localStorage.setItem('products',JSON.stringify(products));
}

function getProducts(){
    let products;
    if(localStorage.getItem('products') === null){
        products = [];
    }else{
        products = JSON.parse(localStorage.getItem('products'));
    }
    return products;
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