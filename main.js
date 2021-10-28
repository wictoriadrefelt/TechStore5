
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
        addProductsToWebpage();
    });
}



/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    const main = document.getElementsByTagName("main")[0];
    listOfProducts.forEach((product) => {
        
        let productCard = document.createElement("div");
        productCard.classList.add("carddiv")
        main.append(productCard)

        // Representing the image of a productCard

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgdiv")
        let img = document.createElement("img")
        img.src = "images/iPhoneX.png"
        img.innerText=product.image
        imgContainer.appendChild(img)
        main.append(imgContainer)


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

       // Representing the price of a productCard
        let priceContainer = document.createElement("div");
        priceContainer.classList.add("pricediv")
        let  paragrahTwo= document.createElement("p2");
        paragrahTwo.innerText = product.price+"kr"
        priceContainer.appendChild(paragrahTwo)
        main.append(priceContainer)

        // Representing the btnContainer of a productCard 
        let btnContainer = document.createElement("div");
        btnContainer.classList.add("btndiv")
        let paragraphThree=document.createElement("button");
        paragraphThree.innerText = `Add to Cart`
        /*
        paragraphThree.className = 'addItemToCartbtn';
        paragraphThree.id = 'purchase'
        */
        // Allows the button to be clicked and ads product
        paragraphThree.addEventListener('click', () => {addToCart(product)
        }) 
        
  
        
        
        btnContainer.appendChild(paragraphThree)
        main.append(btnContainer)

        productCard.append( imgContainer, headerContainer, descriptionContainer, priceContainer, btnContainer); 
  })

};


// adds product to cart
function addToCart(product){
    let cart = localStorage.getItem('cart')

    if(cart){
        cart = JSON.parse(cart)

    }else{
        cart = []; 
    }
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}  









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