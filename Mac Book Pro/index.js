// catching id from html and defining with them in variable
const memory8 = document.getElementById('memory-8');
const memory16 = document.getElementById('memory-16');

const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1TB = document.getElementById('storage-1TB');

const deliveryWithFree = document.getElementById('delivery-free');
const deliveryWithCharge = document.getElementById('delivery-charge');

// catching id from html and defining them in variable for table calculation
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('memory-cost');
const extraStorageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');

// catching id for promo code
const promoCodeInput = document.getElementById('promo-code-input');
const applyButton = document.getElementById('apply-button');
const discountPrice = document.getElementById('discount-price');

// setting active task menu
function activeMenu(menu){
    return menu.classList.contains('active-menu');
}

// total calculation
function totalPriceCalculation(){
    const totalPrice = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) +
    parseInt(extraStorageCost.innerText) + parseInt(deliveryCost.innerText);
    return totalPrice;
}

// grand total calculation
function grandTotal(isApplied){
    const grandTotalPrice = totalPriceCalculation();
    document.getElementById('total-price').innerText = grandTotalPrice;

    if(isApplied){
        function promoCode(){
            const inputVlaue = promoCodeInput.value;
           
            let discountValue, afterDiscountPrice;
            // validating promo code
            if(inputVlaue == 'stevekaku'){
                discountValue = (grandTotalPrice*0.2);
                afterDiscountPrice = grandTotalPrice - discountValue;
                document.getElementById('discount-price').innerText =  afterDiscountPrice;
            }
            else if(inputVlaue == ''){
                document.getElementById('discount-price').innerText = grandTotalPrice;
                alert('promocode field is empty !');
            }
            else if(inputVlaue !== 'stevekaku'){
                document.getElementById('discount-price').innerText = grandTotalPrice;
                alert('invalid promocode !');
            }
            else {
                document.getElementById('discount-price').innerText = grandTotalPrice;
            }
            // set null after applied
            promoCodeInput.value = '';
        }
        promoCode();
    }
    else{
        document.getElementById('discount-price').innerText = grandTotalPrice;
    }
    
}

// setting event listener to set value

// window load event
window.addEventListener('load', function(){
    grandTotal();
})

// memory
memory8.addEventListener('click', function(){
    extraMemoryCost.innerText = 0;
    if(!activeMenu(memory8)){
        memory8.classList.add('active-menu');
        memory16.classList.remove('active-menu');
    }
    grandTotal();
})
memory16.addEventListener('click', function(){
    extraMemoryCost.innerText = 180;
    if(!activeMenu(memory16)){
        memory8.classList.remove('active-menu');
        memory16.classList.add('active-menu');
    }
    grandTotal();
})

// storage
storage256.addEventListener('click', function(){
    extraStorageCost.innerText = 0;
    if(!activeMenu(storage256)){
        storage256.classList.add('active-menu');
        storage512.classList.remove('active-menu');
        storage1TB.classList.remove('active-menu');
    }
    grandTotal()
})
storage512.addEventListener('click', function(){
    extraStorageCost.innerText = 100;
    if(!activeMenu(storage512)){
        storage256.classList.remove('active-menu');
        storage512.classList.add('active-menu');
        storage1TB.classList.remove('active-menu');
    }
    grandTotal()
})
storage1TB.addEventListener('click', function(){
    extraStorageCost.innerText = 180;
    if(!activeMenu(storage1TB)){
        storage256.classList.remove('active-menu');
        storage512.classList.remove('active-menu');
        storage1TB.classList.add('active-menu');
    }
    grandTotal()
})

// delivery 
deliveryWithFree.addEventListener('click', function(){
    deliveryCost.innerText = 0;
    if(!activeMenu(deliveryWithFree)){
        deliveryWithFree.classList.add('active-menu');
        deliveryWithCharge.classList.remove('active-menu');
    }
    grandTotal()
})
deliveryWithCharge.addEventListener('click', function(){
    deliveryCost.innerText = 20;
    if(!activeMenu(deliveryWithCharge)){
        deliveryWithFree.classList.remove('active-menu');
        deliveryWithCharge.classList.add('active-menu');
    }
    grandTotal()
})

// promo code applying
applyButton.addEventListener('click', function(){
    grandTotal(true);
})

