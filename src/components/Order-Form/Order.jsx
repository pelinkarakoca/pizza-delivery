import { useState } from "react";
import axios from "axios";
import "./Order.css";

const ekMalzemeler = [
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
];
const fixedSizes = ["Küçük", "Orta", "Büyük"];
const pizza = {
  name: "Position Absolute Acı Pizza",
  description:
    "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
  price: "85.50₺",
  rate: 4.9,
  comments: 200,
};
export default function Order() {
  const [size, setSize] = useState("");
  const [thickness, setThickness] = useState("default");
  const [extraIng, setExtraIng] = useState([]);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState(1);
  const [increment, setIncrement] = useState(0);

  const extraIngPrices = extraIng.length * 5;
  const totalPrice = amount * (+pizza.price.slice(0, -1) + extraIngPrices);

  function handleAddExtraIng(e) {
    if (extraIng.length === 3 && e.target.checked === true) {
      alert("En fazla 10 adet seçim yapabilirsiniz");
      return;
    }

    setExtraIng((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((el) => el !== e.target.value)
        : [...prev, e.target.value]
    );
  }

  function handleSubmit(e) {
    if (!size || thickness === "default") {
      alert("Lütfen zorunlu alanları doldurunuz");
      return;
    }
    e.preventDefault();
    const id = crypto.randomUUID();

    const newOrder = {
      id,
      size,
      thickness,
      extraIng,
      note,
    };

    console.log(newOrder);
    setSize("");
    setThickness("default");
    setExtraIng([]);
    setNote("");
    axios
      .post(" https://reqres.in/api/pizza ", newOrder)
      .then((data) => console.log(data));
  }

  return (
    <div onSubmit={handleSubmit} className="order-page">
      <div className="order-pizza">
        {" "}
        <h2>{pizza.name}</h2>
        <div className="order-pizza-description">
          <h1>
            {" "}
            <strong>{pizza.price}</strong>
          </h1>
          <div className="order-pizza-review">
            <span>{pizza.rate}</span>
            <span>({pizza.comments})</span>
          </div>
        </div>
        <p>{pizza.description}</p>
      </div>
      <form className="order-form">
        <section>
          <div>
            <h3>Boyut seç</h3>
            {fixedSizes.map((fixedSize) => (
              <label htmlFor={fixedSize} key={fixedSize}>
                <input
                  type="radio"
                  id={fixedSize}
                  value={fixedSize}
                  checked={size === fixedSize}
                  name="pizzaSize"
                  onChange={(e) => setSize(e.target.value)}
                />{" "}
                {fixedSize.charAt(0).toUpperCase() + fixedSize.slice(1)}
              </label>
            ))}
          </div>
          <div>
            <h3> Hamur Kalınlığı</h3>
            <select
              selected
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
            >
              <option value="default" disabled>
                -- Hamur kalınlığı seç --
              </option>
              <option name="thin">İnce</option>
              <option name="thick">Kalın</option>
            </select>
          </div>
        </section>
        <section>
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div>
            {ekMalzemeler.map((ekMalzeme) => (
              <label key={ekMalzeme}>
                <input
                  type="checkbox"
                  id="extras"
                  name="extras"
                  checked={extraIng.includes(ekMalzeme)}
                  value={ekMalzeme}
                  onChange={handleAddExtraIng}
                />
                {ekMalzeme.charAt(0).toUpperCase() + ekMalzeme.slice(1)}
              </label>
            ))}
          </div>
        </section>
        <section>
          <h3>Sipariş Notu</h3>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </section>
        <button
          type="button"
          onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
        >
          &#8722;
        </button>
        {amount}
        <button type="button" onClick={() => setAmount(amount + 1)}>
          &#43;
        </button>
        <div className="order-summary">
          <h3>Sipariş Özeti</h3>
          <div>
            <p>Seçimler</p>
            <p>{extraIngPrices} ₺</p>
          </div>
          <div>
            <p>Toplam</p>
            <p>{totalPrice} ₺</p>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
