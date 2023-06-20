"use strict";

const tbody = document.getElementById("userDisplay");
const todoPriority = document.getElementById("todoPriority");
const todoCompleted = document.getElementById("todoCompleted");
const todoCategory = document.getElementById("todoCategory");


window.onload = init;

function init() {
  showTable();


}

function showTable() {

  let urlParams = new URLSearchParams(location.search);
  console.log(urlParams);

  let id = -1;
  if (urlParams.has("id") === true) {
    document.getElementById("error").innerHTML = "";
    id = urlParams.get("id")
    console.log(id);

    let userSelectedUrl = `http://localhost:8083/api/todos/` + id;
    fetch(userSelectedUrl)
      .then((response) => response.json())
      .then(data => {
        console.log(data);

        todoPriority.value = data.priority;
     
        todoCompleted.value = data.completed;

        todoCategory.value = data.category;

        
        showDetailforUserTable(data);
      });

  } else {
    document.getElementById("error").innerHTML = "Click Home";
  }


}

// editForm.style.display = "block";


function showDetailforUserTable(data) {
 
  let row = tbody.insertRow(-1);
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();

  cell1.innerHTML = data.category;
  cell2.innerHTML = data.priority;
  cell3.innerHTML = data.completed;


}





