let inputFood = document.getElementById("input-food")
let inputBtn = document.getElementById("input-btn")
let inputContainer = document.getElementById("input-container")
let noListEl = document.getElementById('no-list')
let lenEl = document.getElementById('len')

document.addEventListener('DOMContentLoaded',() => {

// Local storage ,fetch and draw

    let storageEl = [...JSON.parse(localStorage.getItem('Foods'))]
    
    storageEl.forEach(item => {

    let li =  document.createElement('li')

    let div = document.createElement('div')
    
    let div1 = document.createElement('div')

    li.append(div,div1)

    div1.parentElement.setAttribute("onclick","remove(event)")
    
    div1.innerHTML = `<i class="fa fa-xmark"></i>`

    div.textContent = item.FoodItem
    
    li.className = 'input-li'

    inputContainer.append(li)

    refreshUI()    

    })


})


let handleInputFood =  () => {


    // inputContainer.innerHTML += `<li class="input-li">${inputFood.value}</li>`;
    
    let li =  document.createElement('li')

    let div = document.createElement('div')
    
    let div1 = document.createElement('div')

    li.append(div,div1)

    div1.parentElement.setAttribute("onclick","remove(event)")
    
    div1.innerHTML = `<i class="fa fa-xmark"></i>`

    div.textContent = inputFood.value
    
    li.className = 'input-li'

    inputContainer.append(li)
     
    // Local Storage

    localStorage.setItem("Foods",JSON.stringify([...JSON.parse(localStorage.getItem("Foods") ||"[ ]"),{FoodItem : inputFood.value}]))
    
    refreshUI();


    inputFood.value = ''; 

}

inputBtn.addEventListener('click',handleInputFood);

  
let remove = function removeItem(event) {

    let exlist = event.target.parentNode.parentNode
    
    exlist.remove()

    let storageEl = [...JSON.parse(localStorage.getItem('Foods'))]

    storageEl.forEach((item) => {

        if (item.FoodItem === exlist.innerText) {

            // Remove storage

            storageEl.splice(storageEl.indexOf(item),1)
            
        }

    })

    localStorage.setItem("Foods",JSON.stringify(storageEl))

refreshUI()

}

function refreshUI(){
    
        lenEl.innerText = `You have ${inputContainer.children.length} list`

    if (inputContainer.children.length > 0 ) {


        noListEl.hidden = true;
    }
    else{

        noListEl.hidden = false
    }

    // inputContainer.children.length > 0 ? ((noListEl.hidden = true),(lenEl.hidden = false)) :((noListEl.hidden = false),(lenEl.hidden = true)) 

}




















inputFood.addEventListener('keyup',(event)=>{
    if (event.key === 'Enter') {
        handleInputFood() 
    }
    else if(event.key === 'KeyZ' && (event.ctrlKey || event.metaKey)){
        inputFood.value = ""
    }
})















// let inputFood = document.getElementById("input-food")
// let inputBtn  = document.getElementById("input-btn")
// let response = document.getElementById("response")
// inputBtn.addEventListener('click',()=>{
//     response.innerText = inputFood.value;
// //    document.write(inputFood.value);
// })
//--Undo operation




// //------------------------------------------------getElementByClass Name


// let inputli = inputContainer.getElementsByClassName("input-li veg");

// let array = [].map.call(inputli,(food) => food.textContent)
// console.log(array);

//-------------------------------------------GetElementBytagName
// let  foodItems = document.getElementsByTagName('p')

// console.log(` I have ${foodItems.length} paragraph tag use it`);


// let result = document.querySelectorAll("li")
// console.log(result[0].innerText);



