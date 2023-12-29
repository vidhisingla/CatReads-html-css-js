if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add_cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('item_title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item_img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs' + total
}



const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phn = document.getElementById("phone_number");
const proid = document.getElementById("productid");

var name_er = document.getElementById("name_er");
var email_er = document.getElementById("email_er");
var phn_er = document.getElementById("phn_er");
var proid_er = document.getElementById("proid_er");

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    validateform();
}

function validateform(){

    const nameval = name.value.trim();
    const emailval = email.value.trim();
    const phnval = phn.value.trim();
    const proidval = proid.value.trim();

    if(nameval == ""){
        name_er.innerHTML="Field can't be left empty";
    }
    if(emailval == ""){
        email_er.innerHTML="Field can't be left empty";
    }
    if(phnval == ""){
        phn_er.innerHTML="Field can't be left empty";
    }
    if(proidval == ""){
        proid_er.innerHTML="Field can't be left empty";
    }

    name.pattern="[a-zA-Z][a-zA-Z0-9\s]*";
    phn.pattern="[0-9.]+";
    email.pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

    if(nameval.length>20){
        name_er.innerHTML="Name is too long";
    }
    if(phnval.length!=10){
        phn_er.innerHTML="Enter a valid phone number";
    }
    if(proidval.length>8){
        proid_er.innerHTML="Enter a valid product id";
    }
    
}