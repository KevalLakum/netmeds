import navbar from "../components/navbar.js";


function name(params) {

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartui = ``
let pyment = ``
let proui = (products) => {
    products.map((ele) => {

        cartui += `  <div class="cart-ui d-flex">
        <div class="cart d-flex col-6 ">
        <div class="cart-img">
            <img src="${ele.Image}" alt="">
        </div>
        <div class="cart-content  ">
            <h1>${ele.Name}</h1>
            <p>Mfr: ${ele.Mkt}</p>
            <h4>${ele.BestPrice}</h4>
            <h6><del>${ele.Mrp}</del></h6>
        </div>
        <div class="qty-box d-flex">
        <div class="plus"><i class="fa-solid fa-plus"></i></div>
        <div class="num"></div>
        <div class="minus"><i class="fa-solid fa-minus"></i></div>
    </div>
    </div> 
    </div>
    `


        pyment += `  <div class="titel ">
    <h3>PAYMENT DETAILS</h3>
    <div class="payment mx-5 d-flex ">
        <div class="details">
            <p>mrp total</p>
            <p>Additional Discount</p>
            <p>Total Amount</p>
        </div>
        <div class="price ">
            <h6>₹ 307.46</h6>
            <h6>₹ 307.46</h6>
            <h6>₹ 307.46</h6>
        </div>
    </div>
    <div class="delivery">
        <h5>Add items worth ₹754.03 more on this order to get FREE delivery</h5>
    </div>
    <div class="pay d-flex">
        <div class="payable">
            <p>Total Payable</p>
            <h4>₹ 344.97</h4>
        </div>
        <div class="process">
            <button>Proceed</button>
        </div>
    </div>

</div>`
    });


};

proui(cart);
document.getElementById('parent').innerHTML = cartui
document.getElementById('payment').innerHTML = pyment

document.getElementById("nav").innerHTML = navbar()

let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].BestPrice * cart[i].qty
}

document.getElementById("total").innerHTML = ` ${total}`;


let plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

    let a=1
    plus.addEventListener("click",()=>{
        a++;

        num.innerHTML = a;
    })


