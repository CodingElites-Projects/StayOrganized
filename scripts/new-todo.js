"use strict";
const userSelectDropdown = document.getElementById("userSelectDropdown");
const userSelect = document.getElementById("userSelect");
const categorySelectRow = document.getElementById("categorySelectRow");
const categorySelect = document.getElementById("categorySelect");
const urgencySelectRow = document.getElementById("urgencySelectRow");
const urgencySelect = document.getElementById("urgencySelect");
const todoDescription = document.getElementById("todoDescription");
const todoDeadline = document.getElementById("todoDeadline");
const addBtn = document.getElementById("addBtn");
const todoApiTable = document.getElementById("todoApiTable");


window.onload = function(){
    populatecategorySelectDropdown();
    onUserSelectDropdown();
    addBtn.onclick = onAddBtnClick;
  
};

function populatecategorySelectDropdown(){

    fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(categories => {
        for(let category of categories){
            let option = document.createElement("option");
            option.value = category.name;
            option.text = category.name;
            categorySelect.appendChild(option);
        }
        
    });
}
  
  function onUserSelectDropdown(){

    

let theUrl = "http://localhost:8083/api/users";
    fetch(theUrl)
        .then(response => response.json())
        .then(users => {
            for(let user of users){
                let option = document.createElement("option");
            option.value = user.id;
            option.text = user.name;

            // Append the option to the dropdown
            userSelect.appendChild(option);
   }
 });

}


function onAddBtnClick() {
    //create a new todo using the API!

    // Create JSON object to include in the request body
let theUrl = "http://localhost:8083/api/todos/";

    let bodyData = {
       
        "userid": userSelect.value,
        "category": categorySelect.value,
        "description": todoDescription.value,
        "deadline": todoDeadline.value,
        "priority": urgencySelect.value,

    }


    // Send the request
    fetch(theUrl, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then(response => response.json())
        .then(task => {
            // If the POST finishes successfully, display a message
            
            console.log(task)
            populateInputTable(task);

        })
      


};

function populateInputTable(task){
let newRow = todoApiTable.insertRow(-1);

let cell1 = newRow.insertCell(0);
cell1.innerHTML = task.userid;

let cell2 = newRow.insertCell(1);
cell2.innerHTML = task.category;

let cell3 = newRow.insertCell(2);
cell3.innerHTML = task.description;

let cell4 = newRow.insertCell(3);
cell4.innerHTML = task.deadline;

let cell5 = newRow.insertCell(4);
cell5.innerHTML = task.priority;


let cell6 = newRow.insertCell(5);
cell6.innerHTML = task.completed;
};




