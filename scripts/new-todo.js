"use strict";
const searchSelectRow = document.getElementById("searchSelectRow");
const categorySelectRow = document.getElementById("categorySelectRow");
const categorySelect = document.getElementById("categorySelect");
const urgencySelectRow = document.getElementById("urgencySelectRow");
const UrgencySelect = document.getElementById("UrgencySelect");
const todoDescription = document.getElementById("todoDescription");
const todoDeadline = document.getElementById("todoDeadline");
const addBtn = document.getElementById("addBtn");

window.onload = function(){
    populatecategorySelectDropdown()
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