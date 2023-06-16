"use strict";

const table = document.getElementById("userTable");
const userSelect = document.getElementById("userSelect");

window.onload = init;

function init() {
  populateUsersClick()
   showUsers();
  // userSelect.onchange = populateUsersClick;
}

function populateUsersClick() {
    let theUrl = 'http://localhost:8083/api/users/' + userSelect.value;
    fetch(theUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
       for(let i of data){
        console.log(i)
        let option = document.createElement("option");
        option.value = i.id;
        option.text = i.name;
        userSelect.appendChild(option);
        
       }
       showUsers(data);
          })
}



function showUsers(data) {
  console.log("clicked");

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
    };


