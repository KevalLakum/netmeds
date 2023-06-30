import navbar from "../components/navbar.js";


function name(params) {
    
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartui=``
let proui=(products)=>{
    products.map((ele)=>{

        cartui+=`<div class="cart-ui d-flex">
         <div class="cart d-flex col-6 m-5 ">
        <div class="cart-img">
            <img src="${ele.Image}" alt="">
        </div>
        <div class="cart-content  ">
            <h1>${ele.Name}</h1>
            <p>Mfr: ${ele.Mkt}</p>
            <h4>₹ ${ele.BestPrice}</h4>
            <h6><del>${ele.Mrp}</del> </h6>
        </div>
        <div class="qty-box">
            <select class="form-select">
                <option>QTY : 1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
        </div>
        </div>
    </div>`
    });

    
};
proui(cart);
document.getElementById('parent').innerHTML =cartui













document.getElementById("nav").innerHTML=navbar()
