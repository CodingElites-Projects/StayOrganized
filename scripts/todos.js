"use strict";

const table = document.getElementById("userDisplayTable");
const userSelect = document.getElementById("userSelect");
const userTable = document.getElementById("userTable");

const tr = document.getElementById("userTableShow");

window.onload = init;

function init() {
  onPopulateUsersClick();

  userSelect.onchange = showUsersTable;
}

function onPopulateUsersClick() {


  fetch('http://localhost:8083/api/users')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (let i of data) {
        console.log(i)
        let option = document.createElement("option");
        option.value = i.id;
        option.text = i.name;
        userSelect.appendChild(option);
      }

    });
    
  


}





// Deshonda's populat start

function showUsersTable() {


  if (userSelect.checked) {
    tr.style.display = "block";
  }


  let theUrl = "http://localhost:8083/api/todos/byuser/" + userSelect.value;
  console.log(theUrl);
  fetch(theUrl)
    .then(response => response.json())
    .then(data => {
      table.innerHTML = "";
      for (let i = 0; i < data.length; i++) {

       
        let row = table.insertRow(-1);
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
    
        cell1.innerHTML = data[i].description;
        cell2.innerHTML = data[i].deadline;
        let cell3 = row.insertCell();
        cell3.className = "text-center mx-3";

        // let anchor = document.createElement("a");
        // anchor.href = ` todo_details.html?id=${userSelect.value}`;
        // anchor.text = "See details";
        // cell3.appendChild(anchor);

        let anchor = document.createElement("a");
        anchor.href = ` todo_details.html?id=${userSelect.value}`;
        anchor.text = "See details";
        cell3.appendChild(anchor);


      }
    });

}



