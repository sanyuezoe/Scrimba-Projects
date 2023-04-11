import catsData from './data.js'
import Cat from './cat.js'

let catArray = ["Archie", "Tutu", "Bubu"]

const topContainer = document.getElementById("top-container")
const heartBtn = document.getElementById("heart-btn")
const crossBtn = document.getElementById("cross-btn")



function getNewCat() {
  const nextCatData = catsData[catArray.shift()]
  return nextCatData ? new Cat(nextCatData) : {}
}

function likeCatData() {
  if (catArray.length > 0 ){
    document.getElementById("like-icon").classList.toggle("show")
  crossBtn.disabled = true
  setTimeout(function(){
    catUser = getNewCat()
  render()
  crossBtn.disabled = false}, 
  1200)
  }
    else{
      swipeAll()
    }
  
} 

function nopeCatData(){
  if (catArray.length > 0 ){
    document.getElementById("nope-icon").classList.toggle("show")
  heartBtn.disabled = true
  setTimeout(function(){
    catUser = getNewCat()
  render()
  heartBtn.disabled = false}, 
  1200)
}
else{
  swipeAll()
}
  }
  

function swipeAll (){
  topContainer.innerHTML = `
   <div class="swipe-all"> <h4>Ta-Da! you have run out of cats!Yes, we only have three users:/</h4></div>`
}



heartBtn.addEventListener('click', likeCatData)
crossBtn.addEventListener('click', nopeCatData)
  function render() {
    topContainer.innerHTML = catUser.getCatHtml()
  }

let catUser = getNewCat()
render()
