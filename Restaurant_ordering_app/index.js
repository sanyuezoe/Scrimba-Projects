import { menuArray } from './data.js'

let totalPrice = 0
const addedDishes = []

const completeBtn = document.getElementById('complete-btn')
const cardForm = document.getElementById('card-form')
const payBtn = document.getElementById('pay-btn')
const paymentForm = document.getElementById('payment-form')

document.addEventListener('click', function(e){
    if(e.target.dataset.btn){
        handleAddClick(e.target.dataset.btn) 
    }
});

function handleAddClick(dishId) {
    const targetDishObj = menuArray.filter(function(dish){
        return dish.id === dishId
    })[0];

    if(!addedDishes.includes(targetDishObj)) {
        document.getElementById('check-out').innerHTML +=`
        <div class="single-dish" id="dish-${targetDishObj.id}">
            <div class="single-dish-name">
                <h5>${targetDishObj.name} </h5>
                <button class="remove-btn" data-id="${targetDishObj.id}">remove</button> 
            </div> 
            <h6>${targetDishObj.price}</h6>
        </div>
        `;

        addedDishes.push(targetDishObj);
        totalPrice += targetDishObj.price
        
    }


    document.getElementById('total-price').innerHTML = `
    <h5>Total Price</h5>
    <h6>${totalPrice}</h6>`

    const removeBtns = document.querySelectorAll(".remove-btn")
    removeBtns.forEach(function(removeBtn){
        removeBtn.addEventListener('click', handleRemoveClick);
    });
}
        
    
function handleRemoveClick(e){
            const dishNewId = e.target.dataset.id;
            const dishEl = document.getElementById(`dish-${dishNewId}`);
            const dishPrice = parseFloat(dishEl.querySelector('h6').textContent);
            dishEl.remove();
            totalPrice -= dishPrice;
            document.getElementById('total-price').innerHTML = `
            <h5>Total Price</h5>
            <h6>${totalPrice}</h6>`
            };
        
        


completeBtn.addEventListener('click', function(){
    cardForm.style.display = 'flex'
    })


payBtn.addEventListener('click', function() {
    const form = document.querySelector('#card-form form');
    if (form.reportValidity()) {
        cardForm.style.display = 'none';
        const cardName = document.getElementById('card-name').value;
        document.getElementById('bottom-part').innerHTML = `<h3 class="end-note">Thanks, ${cardName}! Your order is on its way!</h3>`;
        } else {
            alert('Please fill in all required fields.');
      }
});

function getFeedHtml(){
    let feedHtml= ``

   menuArray.forEach(function(dish){
        feedHtml += `
        <ul class="menu-dish">
            <li><img class="menu-img" src="${dish.image}" alt="${dish.name}pic"></img></li>
            <li class="menu-text">
            <div>    
                <h4>${dish.name}</h4>
                <p class="ingredients">${dish.ingredients}</p>
                <h5>$${dish.price}</h5>
            </div>
            </li>
            <li>
                <button class="add-btn" data-btn="${dish.id}"> +</button>
            </li>
        </ul>
        <hr>
        `
    })

    return feedHtml        

}

function render(){
    document.getElementById('menu').innerHTML = getFeedHtml()
}

render()