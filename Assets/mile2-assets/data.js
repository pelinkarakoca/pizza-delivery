import img1 from "./icons/1.svg";
import img2 from "./icons/2.svg";
import img3 from "./icons/3.svg";
import img4 from "./icons/4.svg";
import img5 from "./icons/5.svg";
import img6 from "./icons/6.svg";
import bg1 from "./cta/kart-1.png";
import bg2 from "./cta/kart-2.png";
import bg3 from "./cta/kart-3.png";
import pz1 from "./pictures/food-1.png";
import pz2 from "./pictures/food-2.png";
import brg1 from "./pictures/food-2.png";

const pizza = {
  name: "Position Absolute Acı Pizza",
  description:
    "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  price: "85.50₺",
  rate: 4.9,
  comments: 200,
  toppings: [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalapeno",
    "Salam",
  ],
  fixedSizes: ["Küçük", "Orta", "Büyük"],
};

const cuisines = [
  { cuisineName: "Kore", img: img1, menu: [{}] },
  {
    cuisineName: "Pizza",
    img: img2,
    menu: [
      {
        name: "Position Absolute Acı Pizza",
        img: pz1,
        description:
          "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
        price: "85.50₺",
        rate: 4.9,
        comments: 200,
        toppings: [
          "Pepperoni",
          "Tavuk Izgara",
          "Mısır",
          "Sarımsak",
          "Ananas",
          "sosis",
          "Soğan",
          "Sucuk",
          "Biber",
          "Kabak",
          "Kanada Jambonu",
          "Domates",
          "Jalapeno",
          "Salam",
        ],
        fixedSizes: ["Küçük", "Orta", "Büyük"],
      },
      {
        name: "Terminal Pizza",
        img: pz2,
        description:
          "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
        price: "60.50₺",
        rate: 4.9,
        comments: 200,
        toppings: [
          "Pepperoni",
          "Tavuk Izgara",
          "Mısır",
          "Sarımsak",
          "Ananas",
          "sosis",
          "Soğan",
          "Sucuk",
          "Biber",
          "Kabak",
          "Kanada Jambonu",
          "Domates",
          "Jalapeno",
          "Salam",
        ],
        fixedSizes: ["Küçük", "Orta", "Büyük"],
      },
    ],
  },
  {
    cuisineName: "Burger",
    img: img3,
    menu: [
      {
        name: "useEffect Tavuklu Burger ",
        price: "60.50₺",
        img: brg1,
        rate: 4.9,
        comments: 200,
      },
    ],
  },
  { cuisineName: "Kızartmalar", img: img4, menu: [{}] },
  { cuisineName: "Fast Food", img: img5, menu: [{}] },
  { cuisineName: "Gazlı içecek", img: img6, menu: [{}] },
];

const deals = [
  {
    campaign: "Özel Lezzetus",
    name: "Position: Absolute Acı Pizza",
    img: bg1,
  },
  { campaign: "Hackathlon Burger Menü", img: bg2 },
  { campaign: "Çoook hızlı npm gibi kurye", img: bg3 },
];
export { pizza, cuisines, deals };
