let navbar =()=>{

return (`<header>
 <div class="container">
<nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <a href="/index.html"><img src="../images/logo.svg" class="img" alt="" href="#">
    </a>
       
        <form class="d-flex " role="search" >
            <input  class="form-control me-2" type="search" placeholder="Search for medicine & wellness products…" aria-label="Search">
        </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="../pages/product.html"> <img src="../images/upload_rx.svg" alt="">  product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="../pages/login.html"> <img src="../images/offers_icon.svg" alt="">  login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="../pages/cart.html"> <img src="../images/cart_icon.svg" alt="">  cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../pages/signin.html"> <img src="../images/profile_icon.svg" alt="">  sign in / sign up</a>
                </li>


            </ul>

        </div>
    </div>
</nav>
</div>
</header>`)
}

export default navbar