"use strict";


const todoPriority = document.getElementById("todoPriority");
const todoCompleted = document.getElementById("todoCompleted");
const todoCategory = document.getElementById("todoCategory");
const todoCompletedBtn = document.getElementById("todoCompletedBtn");
const messageText = document.getElementById("messageText");



window.onload = () => {

  todoCompletedBtn.onclick = onTodoCompletedBtnClick;
  
  let urlParams = new URLSearchParams(location.search);

  let id = -1;

  id = urlParams.get("id");
  console.log(id + "Hello");

  console.log(urlParams);


  if (urlParams.has("id") === true) {
    document.getElementById("error").innerHTML = "";

    console.log("click");

    let userSelectedUrl = `http://localhost:8083/api/todos/${id}`;
    console.log(userSelectedUrl);
    fetch(userSelectedUrl)
      .then((response) => response.json())
      .then(data => {
       

        todoPriority.value = data.priority;
       

        todoCompleted.value = data.completed;

        todoCategory.value = data.category;
        todoPriority.disabled= true;
       

        todoCompleted.disabled= true;

        todoCategory.disabled= true;

        if (data.completed) {
          todoCompletedBtn.disabled = true;
          messageText.innerHTML = "TODO completed"
        } else {
          messageText.innerHTML = "Mark as complete"
        }


      })
      .catch(err => {
        messageText.innerHTML = "Error getting info";
      });
  }
}


function onTodoCompletedBtnClick() {

  let urlParams = new URLSearchParams(location.search);
  console.log(urlParams);

  let id = -1;

  if (urlParams.has("id") === true) {
    document.getElementById("error").innerHTML = "";
    id = urlParams.get("id")
    console.log(id);

    let theUrl = `http://localhost:8083/api/todos/` + id;
    fetch(theUrl, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => {
        // If the POST finishes successfully, display a message

        console.log("todobuttoupdateclicked");
        messageText.innerHTML = "You have successfully edit this TODO"


      })
      .catch(err => {
        // If the POST returns an error, display a message

        messageText.innerHTML = "Unexpected error";
      });

  }
}






