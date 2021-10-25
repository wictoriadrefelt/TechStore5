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

productCard.append(headerContainer, imgContainer, descriptionContainer, priceContainer, btnContainer)
}