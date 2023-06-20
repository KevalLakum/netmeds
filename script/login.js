import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML=navbar()


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("user")) || [];


    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email, password);

    if (email == user.email && password == user.password) {
        alert("login successful")

    }
    else if (email == user.email && password !== user.password) {
        alert("please enter your current password");
    }
    
    else {
        alert("please enter your current email address")
    }

})