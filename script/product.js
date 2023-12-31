import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML=navbar()


let product = [
  {
    id: 1,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg",
    Name: "Dabur Pudin Hara Pearls Capsule 10's",
    Mkt: " Dabur India Ltd",
    BestPrice: "28.50",
    Mrp: "30.00",
  },
  {
    id: 2,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/341494/liv_52_tablet_100_s_0.jpg",
    Name: "Himalaya Liv.52 Tablet 100's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "124.50",
    Mrp: "150.00",
  },
  {
    id: 3,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/390287/galact_granules_200gm_0.jpg",
    Name: "Galact Granules - Elaichi Flavour 200gm",
    Mkt: " Emcure Pharmaceuticals Ltd",
    BestPrice: "336.80",
    Mrp: "421.00",
  },
  {
    id: 4,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/303384/confido_tablet_60_s_0.jpg",
    Name: "Himalaya Confido Tablet 60's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "144.50",
    Mrp: "170.00",
  },
  {
    id: 5,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/104243/himalaya_liv_52_hb_capsule_10s_119367_0_1.jpg",
    Name: "Himalaya Liv.52 HB Capsule 10's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "144.00",
    Mrp: "160.00",
  },
  {
    id: 6,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/359873/septilin_tablet_60_s_0.jpg",
    Name: "Himalaya Septilin Tablet 60's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "141.90",
    Mrp: "165.00",
  },
  {
    id: 7,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413953/kayam_tablet_30_s_0.jpg",
    Name: "Kayam Tablet 30's",
    Mkt: " Seth Brothers",
    BestPrice: "96.80",
    Mrp: "110.00",
  },
  {
    id: 8,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15912/dabur_honitus_herbal_cough_remedy_syrup_100_ml_0.jpg",
    Name: "7% OFF Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
    Mkt: " Dabur India Ltd",
    BestPrice: "109.74",
    Mrp: "118.00",
  },
  {
    id: 9,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15916/dabur_pudin_hara_active_liquid_30_ml_0.jpg",
    Name: "Dabur Pudin Hara Active Liquid 30 ml",
    Mkt: "Dabur India Ltd",
    BestPrice: "51.15",
    Mrp: "55.00",
  },
  {
    id: 10,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/368510/septilin_syrup_200ml_0.jpg",
    Name: "Himalaya Septilin Syrup 200 ml",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "137.60",
    Mrp: "160.00",
  },
  {
    id: 11,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15909/dabur_hingoli_tablet_90_s_0.jpg",
    Name: "Dabur Hingoli Tablet 90's",
    Mkt: "Dabur India Ltd",
    BestPrice: "33.25",
    Mrp: "35.00",
  },
  {
    id: 12,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/388141/himplasia_tablet_30_s_0.jpg",
    Name: "Himalaya Himplasia Tablet 30's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "167.70",
    Mrp: "195.00",
  },
  {
    id: 13,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/113667/zandu_balm_8_ml_0.jpg",
    Name: "Zandu Balm 8 ml",
    Mkt: "Emami Ltd",
    BestPrice: "39.90",
    Mrp: "42.00",
  },
  {
    id: 14,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/13523/zandu_balm_25_ml_0.jpg",
    Name: "Zandu Balm 25 ml",
    Mkt: "Emami Ltd",
    BestPrice: "78.40",
    Mrp: "80.00",
  },
  {
    id: 15,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/344892/rumalaya_forte_tablet_30_s_0.jpg",
    Name: "Himalaya Rumalaya Forte Tablet 30's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "162.00",
    Mrp: "180.00",
  },
  {
    id: 16,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/325323/himalaya_speman_tablet_60s_39937_0_1.jpg",
    Name: "Himalaya Speman Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "160.20",
    Mrp: "180.00",
  },
  {
    id: 17,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413872/dabur_sat_isabgol_husk_100_gm_0.jpg",
    Name: "Dabur Sat Isabgol Husk 100 gm",
    Mkt: "Dabur India Ltd",
    BestPrice: "123.20",
    Mrp: "140.00",
  },
  {
    id: 18,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/399743/diabecon_ds_tablet_60_s_0.jpg",
    Name: "Himalaya Diabecon DS Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "174.00",
    Mrp: "200.00",
  },
  {
    id: 19,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15793/dabur_naturecare_double_action_powder_100_gm_0.jpg",
    Name: "Dabur Naturecare Double Action Powder 100 gm",
    Mkt: "Dabur India Ltd",
    BestPrice: "136.40",
    Mrp: "155.00",
  },
  {
    id: 20,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/844069/dabur_hajmola_regular_tablet_120_s_0.jpg",
    Name: "Dabur Hajmola Regular Digestive Tablet 120's",
    Mkt: "Dabur India Ltd",
    BestPrice: "55.80",
    Mrp: "60.00",
  },
  {
    id: 21,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/331497/himalaya_gasex_tablet_100_s_0.jpg",
    Name: "Himalaya Gasex Tablet 100's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "144.00",
    Mrp: "160.00",
  },
  {
    id: 22,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/363656/pankajakasthuri_breathe_easy_granules_400_gm_43929_0_2.jpg",
    Name: "Pankajakasthuri Breathe Easy Granules 400 gm",
    Mkt: " Pankajakasthuri Herbals India Pvt Ltd",
    BestPrice: "324.00",
    Mrp: "360.00",
  },
  {
    id: 23,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413624/pankajakasthuri_orthoherb_oil_100_ml_0.jpg",
    Name: "Pankajakasthuri Orthoherb Oil 100 ml",
    Mkt: " Pankajakasthuri Herbals India Pvt Ltd",
    BestPrice: "115.00",
    Mrp: "125.00",
  },
  {
    id: 24,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/829082/amlycure_ds_capsule_20s_1_0.jpg",
    Name: "Aimil Amlycure D.S Capsule 20's",
    Mkt: " Herbalify Global",
    BestPrice: "156.60",
    Mrp: "180.00",
  },
  {
    id: 25,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/840449/dabur_hajmola_imli_tablets_120_s_0.jpg",
    Name: "Dabur Hajmola Imli Digestive Tablets 120's",
    Mkt: " Dabur India Ltd",
    BestPrice: "55.80",
    Mrp: "60.00",
  },
  {
    id: 26,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/350090/mentat_tablet_60_s_0.jpg",
    Name: "Himalaya Mentat Tablet 60's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "126.00",
    Mrp: "140.00",
  },
  {
    id: 27,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
    Name: "Dabur Shilajit Gold Capsule 10's",
    Mkt: "  Dabur India Ltd",
    BestPrice: "242.00",
    Mrp: "275.00",
  },
  {
    id: 28,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413011/pankajakasthuri_orthoherb_tablet_60_s_0.jpg",
    Name: "Pankajakasthuri Orthoherb Tablet 60's",
    Mkt: "  Pankajakasthuri Herbals India Pvt Ltd",
    BestPrice: "264.00",
    Mrp: "300.00",
  },
  {
    id: 29,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/377969/amree_plus_capsule_20_s_0.jpg",
    Name: "Aimil Amree Plus Capsule 20's",
    Mkt: "Herbalify Global",
    BestPrice: "128.25",
    Mrp: "135.00",
  },
  {
    id: 30,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413952/kayam_churna_100_gm_0.jpg",
    Name: "Kayam Churna 100 gm",
    Mkt: " Seth Brothers",
    BestPrice: "88.11",
    Mrp: "99.00",
  },
  {
    id: 31,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/13524/zandu_balm_ultra_power_8_ml_0.jpg",
    Name: "Zandu Balm Ultra Power 8 ml",
    Mkt: " Emami Ltd",
    BestPrice: "45.60",
    Mrp: "48.00",
  },
  {
    id: 32,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/380446/abana_tablet_60_s_0.jpg",
    Name: "Himalaya Abana Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "131.75",
    Mrp: "155.00",
  },
  {
    id: 33,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15760/prosteez_tablet_20s_115089_0_2.jpg",
    Name: "Prosteez Tablet 20'S",
    Mkt: "Charak Pharma Pvt Ltd",
    BestPrice: "127.50",
    Mrp: "150.00",
  },
  {
    id: 34,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/407009/dabur_triphala_tablet_60_s_0.jpg",
    Name: "Dabur Triphala Tablet 60's",
    Mkt: " Dabur India Ltd",
    BestPrice: "70.40",
    Mrp: "80.00",
  },
  {
    id: 35,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/340685/lvate_capsule_10_s_0.jpg",
    Name: "Lvate Capsule 10'S",
    Mkt: " Sanzyme Pvt Ltd",
    BestPrice: "440.35",
    Mrp: "494.77",
  },
  {
    id: 36,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/407398/himalaya_wellness_brahmi_tablet_60_s_0.jpg",
    Name: "Himalaya Wellness Brahmi Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "180.00",
    Mrp: "200.00",
  },
  {
    id: 37,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/411885/aimil_bgr_34_tablet_100s_53425_0_1.jpg",
    Name: "Aimil BGR-34 Tablet 100's",
    Mkt: "Herbalify Global",
    BestPrice: "522.00",
    Mrp: "600.00",
  },
  {
    id: 38,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/844071/dabur_hajmola_anardana_tablet_120_s_0.jpg",
    Name: "Dabur Hajmola Anardana Digestive Tablet 120's",
    Mkt: "Dabur India Ltd",
    BestPrice: "55.80",
    Mrp: "60.00",
  },
  {
    id: 39,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/407400/himalaya_wellness_shallaki_tablet_60_s_0.jpg",
    Name: "Himalaya Wellness Shallaki Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "180.00",
    Mrp: "200.00",
  },
  {
    id: 40,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/844070/dabur_hajmola_pudina_tablet_120_s_0.jpg",
    Name: "Dabur Hajmola Pudina Tablet 120's",
    Mkt: " Dabur India Ltd",
    BestPrice: "55.80",
    Mrp: "60.00",
  },
  {
    id: 41,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/408863/zandu_pancharishta_digestive_tonic_450_ml_0_1.jpg",
    Name: "Zandu Pancharishta Digestive Tonic 450 ml",
    Mkt: " Emami Ltd",
    BestPrice: "130.50",
    Mrp: "145.00",
  },
  {
    id: 42,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/413864/dabur_stresscom_capsules_10_s_0.jpg",
    Name: "Dabur Stresscom Capsules 10's",
    Mkt: " Dabur India Ltd",
    BestPrice: "68.64",
    Mrp: "78.00",
  },
  {
    id: 43,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/364988/himalaya_koflet_h_lozenges_ginger_flavour_6_s_0.jpg",
    Name: "Himalaya Koflet H Lozenges - Ginger Flavour 6's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "32.40",
    Mrp: "36.00",
  },
  {
    id: 44,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/12748/dabur_chyawanprash_awaleha_250_gm_0.jpg",
    Name: "Dabur Chyawanprash Awaleha 250 gm",
    Mkt: " Dabur India Ltd",
    BestPrice: "106.95",
    Mrp: "115.00",
  },
  {
    id: 45,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/840553/dabur_honey_250_gm_0_2.jpg",
    Name: "Dabur Honey 250 gm",
    Mkt: " Dabur India Ltd",
    BestPrice: "111.60",
    Mrp: "120.00",
  },
  {
    id: 46,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15836/dabur_lipistat_capsule_10_s_0.jpg",
    Name: "Dabur Lipistat Capsule 10's",
    Mkt: "  Dabur India Ltd",
    BestPrice: "79.20",
    Mrp: "90.00",
  },
  {
    id: 47,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/367336/r_compound_tablet_100s_0_1.jpg",
    Name: "Alarsin Pharmaceuticals",
    Mkt: "  Dabur India Ltd",
    BestPrice: "184.50",
    Mrp: "205.00",
  },
  {
    id: 48,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/821278/kapiva_wild_amla_juice_1_ltr_61043_0_7.jpg",
    Name: "Kapiva Wild Amla Juice 1 ltr",
    Mkt: " Adret Retail Pvt Ltd, (Kapiva)",
    BestPrice: "269.10",
    Mrp: "299.00",
  },
  {
    id: 49,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/412552/himalaya_wellness_neem_tablet_60_s_0.jpg",
    Name: "Himalaya Wellness Neem Tablet 60's",
    Mkt: " The Himalaya Drug Company",
    BestPrice: "170.00",
    Mrp: "200.00",
  },
  {
    id: 50,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/15789/himalaya_wellness_triphala_tablet_60_s_0.jpg",
    Name: "Himalaya Wellness Triphala Tablet 60's",
    Mkt: "The Himalaya Drug Company",
    BestPrice: "170.00",
    Mrp: "200.00",
  },
  {
    id: 51,
    Image:
      "https://www.netmeds.com/images/product-v1/600x600/316749/hamdard_safi_syrup_500_ml_0.jpg",
    Name: "Hamdard Safi Syrup 500 ml",
    Mkt: " Hamdard Laboratories India Pvt Ltd",
    BestPrice: "195.50",
    Mrp: "230.00",
  },
];

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

//         proui += `
// <div class="product">
//                 <div class="product-box">
//                     <img src="${Element.Image}"
//                         alt="">
//                     <h3>${Element.Name}</h3>
//                     <p><span>Ayush <span>Ayurvedic</span></span></p>
//                     <p>Mkt: ${Element.Mkt}</p>
//                     <h5>Best price* <span>${Element.BestPrice}</span></h5>
//                     <h6>MRP <span> ${Element.Mrp}</span></h6>
//                     <button id="btn">ADD TO CART</button>
//                 </div>
//      </div>`
