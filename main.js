var listOfProducts;

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


function initSite() {
    loadProducts();
    console.log(listOfProducts)
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    const main = document.getElementsByTagName("main")[0];
    listOfProducts.forEach((product,i) => {
        let productCard = document.createElement("div");
        
        // Representing the header of a productCard
        let headerContainer = document.createElement("div");
        headerContainer.classList.add("")

        let header = document.createElement("h2")
        header.innerText = product.title

        headerContainer.appendChild(header)

        // Representing the image of a productCard

        let imgContainer = document.createElement("div");
        let priceContainer = document.createElement("div");
        let descriptionContainer = document.createElement("div");
        let btnContainer = document.createElement("div");
        

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
            title: e.target.parentElement.textContent,
            price: e.target,
            image: e.target,
            description: e.target,
            count: 0,
            
        };
        if(JSON.parse(localStorage.getItem('products')) === null){
            products.push(product);
            localStorage.setItem('products', JSON.stringify(product));
            
        }else{
            const localItems = localStorage.getItem('products');
            console.log(' hej');
            console.log(products)
            products.map(data=>{
                console.log(data, 'tjena')
                if(products.id == data.id){
                    products.count = data.count +1;
                }else{
                    products.push(data);
                }
            })
        }
    });

    

}