let product = [
    {
      id: 1,
      Image:
        "https://www.netmeds.com/images/product-v1/600x600/844107/himalaya_erina_ep_powder_150_gm_0.jpg",
      Name: "Himalaya Erina-Ep Powder 150 gm",
      Mkt: "The Himalaya Drug Company",
      BestPrice: "196.20",
      Mrp: "218.00",
    },
    {
        id: 2,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844110/himalaya_himcal_pet_200_ml_0.jpg",
        Name: "Himalaya Himcal Pet 200 ml",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 135.00",
        Mrp: "150.00",
      },
      {
        id: 3,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 4,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 5,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 6,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 7,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 8,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 9,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 10,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 11,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 12,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 13,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
      {
        id: 14,
        Image:
          "https://www.netmeds.com/images/product-v1/600x600/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
        Name: "Himalaya Anxocare Vet Tablets 60's",
        Mkt: "The Himalaya Drug Company",
        BestPrice: " 157.50",
        Mrp: "175.00",
      },
]



let proui = ``;
let ui = (product) => {
  console.log(product);
  product.map((Element) => {
    let img = document.createElement("img");
    img.src = Element.Image;
    let name = document.createElement("h3");
    name.innerHTML = Element.Name;
    let mkt = document.createElement("p");
    mkt.innerHTML = Element.Mkt;
    let bestprice = document.createElement("h5");
    bestprice.innerHTML = "Best Price";
    let span3 = document.createElement("span");
    span3.innerHTML = Element.BestPrice;
    bestprice.append(span3);
    let mrp = document.createElement("h6");
    mrp.innerHTML = "MRP";
    let span4 = document.createElement("span");
    span4.innerHTML = Element.Mrp;
    mrp.append(span4);
    let div = document.createElement("div");
    let ptag = document.createElement("p");
    let span1 = document.createElement("span");
    span1.innerHTML = "Ayush";
    let span2 = document.createElement("span");
    span2.innerHTML = "Ayurvedic";
    ptag.append(span1, span2);
    let btn = document.createElement("button");
    btn.innerHTML = "ADD TO CART";
    btn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let exsiting = false;
      cart.map((item, idx) => {
        if (item.id == Element.id) {
          exsiting = true;
          cart[idx].qty += 1;
        }
      });
      if (!exsiting) {
        cart.push({ ...Element, qty: 1 });
        alert("product has been added");
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
    div.append(img, name, ptag, mkt, bestprice, mrp, btn);
    div.setAttribute("class", "product-box");
    let div2 = document.createElement("div");
    div2.append(div);
    div2.setAttribute("class", "product");
    document.querySelector(".box-2").append(div2);
  });
};

ui(product);