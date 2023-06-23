import navbar from "../components/navbar.js";



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("user")) || [];


    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email, password);

    if (email == user.email && password == user.password) {
        alert("login successful")
        localStorage.setItem("loggedin", true);
        window.location.href="/index.html"

    }
    else if (email == user.email && password !== user.password) {
        alert("please enter your current password");
    }
    else if(email !== user.email && password == user.password) {
        alert("please enter your current Email");
    }
    
    // else {
    //     alert("please enter your current email address")
    // }
if(email !== user.email && password !==user.password){
    alert("invalid Login please try again")
    localStorage.setItem("invalid" , false);
    window.location.href="./signin.html"

    
}

})


document.getElementById("nav").innerHTML=navbar()