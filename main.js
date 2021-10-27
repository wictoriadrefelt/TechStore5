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
        img.src = "./images/" + product.image
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
        let paragrahThree=document.createElement("button");
        paragrahThree.innerText = `Add to Cart`
        btnContainer.appendChild(paragrahThree)
        main.append(btnContainer)

        productCard.append( imgContainer, headerContainer, descriptionContainer, priceContainer, btnContainer); 
    })

};
/*
productCard.append(headerContainer, imgContainer, descriptionContainer, priceContainer, btnContainer)
*/

// add product(s) to cart 
/* TODO FIX BUTTON */
let addingToCart = document.getElementsByClassName('addingToCart');
let products = [];
console.log(addingToCart)
for(let i = 0; i < addingToCart.length; i++){
    addingToCart[i].addEventListener('click', function(e){
        console.log(e.target.parentElement.textContent)
        
        // Add product to localStorage, will target where current tags are rendered. 
        let product = {
            id: i+1,
            title: e.target,
            price: e.target,
            image: e.target,
            description: e.target,
        };
        localStorage.setItem('products', JSON.stringify(product));
    });

    

}

