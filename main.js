const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carIcon = document.querySelector(".navbar-shopping-cart");
const producDatailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const producDatailContainer = document.querySelector("#productDatail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
carIcon.addEventListener("click", togglecarritoAside);

producDatailCloseIcon.addEventListener("click", closeProductDatailAside);

function closeProductDatailAside(){
    producDatailContainer.classList.add("inactive"); 
}

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDatailClosed = producDatailContainer.classList.contains("inactive");

    if(!isAsideClosed || isProductDatailClosed){
        shoppingCartContainer.classList.add("inactive");
        producDatailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDatailClosed = producDatailContainer.classList.contains("inactive");

    if(!isAsideClosed || isProductDatailClosed){
        shoppingCartContainer.classList.add("inactive");
        producDatailContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function togglecarritoAside(){
    const isMobileClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isProductDatailClosed = producDatailContainer.classList.contains("inactive");

    if(!isMobileClose || !isDesktopMenuClose || isProductDatailClosed){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        producDatailContainer.classList.add("inactive");
    }

    

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDatailAside(){
    producDatailContainer.classList.remove("inactive");
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "computador",
    price: 520,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr){
    for (product of arr){
        const productCart = document.createElement("div");
        productCart.classList.add("product-card");
    
        const productImg = document.createElement ("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDatailAside);

    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
    }
}

renderProducts(productList);