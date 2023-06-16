"use strict"

// const todosBackgroundHero = document.getElementById("todosBackgroundHero");

const userSelect = document.getElementById("userSelect");


window.onload = () => {
    userSelect.onchange = populateUsersClick;
    // populateuserSelect();
}

function populateUsersClick() {
    let theUrl = 'http://localhost:8083/api/todos/byuser/' + userSelect.value;
    fetch(theUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data); 
        //   populateUserTablet(data);
          })
      }
        

