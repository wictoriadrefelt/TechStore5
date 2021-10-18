let listOfProducts;

function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
        console.log(addProductsToWebpage());
    });
}






function initSite() {
    loadProducts();
    
    // This would also be a good place to initialize other parts of the UI
}

initSite();

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    
    console.log(listOfProducts);
    /*
    for(prod in listOfProducts){
        listOfProducts.filter(function(item, index){
            console.log(item, 'what')
            console.log(index, 'topchats')
            var findFirst = listOfProducts.at(0);
            console.log(listOfProducts.at(3), 'FOUND IT!!!!!!!!!')
            let addedPhone = listOfProducts.at(3);
            localStorage.setItem('added', JSON.stringify(addedPhone));
            let phones = JSON.parse(localStorage.getItem('added'));
            console.log('*************')
            console.log('added: ******', phones.price)
            console.log(phones.price + phones.price)
            console.log(findFirst, 'DID WE FIND?')
            
            
            sessionStorage.setItem(index == 0, 'phone');
            let chat = sessionStorage.getItem('phone', 'here is is')
            console.log(chat, '******')
            /*
            for (var i = 0; i < sessionStorage.length; i++){
                let h =sessionStorage.getItem(sessionStorage.key(i))
                console.log(h, 'YAYAY')
            }*/

        }  


/** Adds product to shoppingcart by array-index, to be used with add to cart button */
function addProdToCartByIndex(saved, i){
    let addedPhone = listOfProducts.at(i);
            localStorage.setItem(saved, JSON.stringify(addedPhone));
            console.log('product added to cart: ', addedPhone)
            
    }






function addProduct(saved, i){
    newName = {'name' : 'stefan'}
    localStorage.setItem(saved, JSON.stringify(newName));
    let tester = localStorage.getItem(saved);
    console.log(JSON.parse(tester));
    itemArr = loadProducts()
    for(let x in itemArr){
        console.log(x + ': ' + listOfProducts[x] + 'ccccccc')
    }
    
    for(let z = 0; z < listOfProducts ; z++) {
    let addedPhone = listOfProducts.at(i);
            localStorage.setItem(saved, JSON.stringify(addedPhone));
            console.log('added phone', addedPhone)
            
    }
    }    


