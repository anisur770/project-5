const button = document.getElementById('search-btn');
button.addEventListener('click',function(){
    const inputField = document.getElementById('input-field').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`)
    .then(res => res.json())
    .then(data => displayFood(data.meals));

    // console.log(fetch);
})



function displayFood(foods){
    const mealContainer = document.getElementById('meals-container');
    for(let i = 0;i<foods.length;i++){
         let foodList = foods[i];
         const singleFood = document.createElement('div');
         singleFood.className = 'food-block';
        const food = `
        <img src="${foodList.strMealThumb}" alt="">
        <h3>${foodList.strMeal}</h3>
    
        <button onclick "displayFoodsDetail('strMeal')" > Detail </button>
        `;
        singleFood.innerHTML = food;
        mealContainer.appendChild('&(foodList.singleFood)');
    }
 }
 const displayFoodsDetail = strMeal => {
     const url = 'https:'
     fetch(url)
     .then(res => res.json())
     .then(data => renderFoodInfo(data[0]));

 }
 const renderFoodInfo = foodList => {
     const foodDiv = document.getElementById('')
     foodDiv.innerHTML =
     '
     <h1> &{}</h1>
     
     '
 }
 



// function displayFood(foods){
//    const mealContainer = document.getElementById('meals-container');
//    for(let i = 0;i<foods.length;i++){
//         let foodList = foods[i];
//         const singleFood = document.createElement('div');
//         singleFood.className = 'food-block';
//        const food = `
//        <img src="${foodList.strMealThumb}" alt="">
//        <h3>${foodList.strMeal}</h3>
//        <button  type="More"> more</button>
//        `;
//        singleFood.innerHTML = food;
//        mealContainer.appendChild(singleFood);
//    }
// }



    