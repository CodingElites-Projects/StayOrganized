"use strict";
const userSelectDropdown = document.getElementById("userSelectDropdown");
const userSelect = document.getElementById("userSelect");
const categorySelectRow = document.getElementById("categorySelectRow");
const categorySelect = document.getElementById("categorySelect");
const urgencySelectRow = document.getElementById("urgencySelectRow");
const UrgencySelect = document.getElementById("UrgencySelect");
const todoDescription = document.getElementById("todoDescription");
const todoDeadline = document.getElementById("todoDeadline");
const addBtn = document.getElementById("addBtn");

window.onload = function(){
    populatecategorySelectDropdown()
    userSelect.onclick = onUserSelectDropdown;
}

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
        
    })
}
  
  function onUserSelectDropdown(){

    userSelect.innerHTML= ""; 

let theUrl = "http://localhost:8083/api/users";
    fetch(theUrl)
        .then(response => response.json())
        .then(users => {
            for(let user of users){
                let option = document.createElement("option");
            option.value = user.id;
            option.text = user.name;

            // Append the option to the dropdown
            userSelect.appendChild(option)}
            })

}

