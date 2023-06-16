
window.onload= function(){
    
    userSelect.onclick = onUserSelectDropdown;

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