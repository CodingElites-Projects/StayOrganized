"use strict";

const table = document.getElementById("userTable");

window.onload = init;

function init() {

 

  showUsers();
  userSelect.onchange = populateUsersClick;

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



function showUsers() {
  console.log("clicked");

  let theUrl = "http://localhost:8083/api/todos/"
  fetch(theUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();
            let cell6 = row.insertCell();
    
            cell1.innerHTML = data[i].id;
            cell2.innerHTML = data[i].category;
            cell3.innerHTML = data[i].description;
            cell4.innerHTML = data[i].deadline;
            cell5.innerHTML = data[i].priority;
            cell6.innerHTML = data[i].completed;
        

        }
    });
}

