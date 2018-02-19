const addCat = function(name, food, image){

const catList = document.createElement('ul')
catList.classList.add('cat')


const liName = document.createElement('li')
liName.innerText = "Name: " + name

const liFood = document.createElement('li')
liFood.innerText = "Favourite food: " + food

const liImage = document.createElement('li')
liImage.innerHTML = <img width="500" src=image>

catList.appendChild(liImage)
catList.appendChild(liFood)
catList.appendChild(liName)

const cats = document.querySelector('#cats')
cats.appendChild(catList)

}

const app = function(){
  addCat("Barry", "Salmon", "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg")

}
