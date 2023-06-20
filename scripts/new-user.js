"use strict";
const nameId = document.getElementById("nameId");
const usernameId = document.getElementById("usernameId");
const passwordId = document.getElementById("passwordId");
const confirmPasswordId = document.getElementById("confirmPasswordId");
const submitBtn = document.getElementById("submitBtn");
const messageText = document.getElementById("messageText");

window.onload = function () {
    submitBtn.onclick = addNewUserToApi;
}

function addNewUserToApi() {
    // (passwordId.value != confirmPasswordId.value) ?
    //  messageText.innerHtml = "Password dont match" : messageText.innerhtml = "";

    let isValid = (passwordId.value == confirmPasswordId.value);//some expression to test if everything is okay
    if (isValid) {
        let bodyData = {
            "name": nameId.value,
            "username": usernameId.value,
            "password": passwordId.value
        };

        let theUrl = "http://localhost:8083/api/users";
        fetch(theUrl, {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())
            .then(newUser => {
                console.log(newUser);
            })
            .catch(error => {
                console.log("Some error happened:", error);
            });
            messageText.innerHTML = "user created"
    } else {
        // Form error, display message.
        messageText.innerHTML = "Error, try again";
    }
}


