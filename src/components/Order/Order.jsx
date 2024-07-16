import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SelectedPizzaDetails from "./SelectedPizzaDetails";
import "./Order.css";
import Button from "../Button/Button";

// pizza data.js'ten geliyor, {toppings, fixedSizes}
export default function Order({ pizza }) {
  const [isDisabled, setisDisabled] = useState(true);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState({});
  const [order, setOrder] = useState({
    size: "",
    thickness: "default",
    extraIng: [],
    note: "",
    name: "",
  });

  const extraIngPrices = order.extraIng.length * 5;
  const totalPrice = amount * (+pizza.price.slice(0, -1) + extraIngPrices);
  let history = useHistory();

  function formValidation() {
    const newErrors = {};
    if (!order.size) newErrors.size = "Lütfen pizza kalınlığı seçiniz";
    if (order.thickness === "default")
      newErrors.thickness = "Lütfen hamur kalınlığı seçiniz";
    if (order.name.length < 5)
      newErrors.name = "Lütfen geçerli bir isim giriniz";
    if (order.extraIng.length < 4)
      newErrors.extraIng = "Lütfen en az dört malzeme seçiniz";
    setError(newErrors);
    setisDisabled(Object.keys(newErrors).length);
  }

  useEffect(() => {
    formValidation();
  }, [order]);

  function handleAddExtraIng(e) {
    if (order.extraIng.length === 10 && e.target.checked === true) {
      alert("En fazla 10 adet seçim yapabilirsiniz");
      return;
    }
    setOrder((prev) => ({
      ...prev,
      extraIng: prev.extraIng.includes(e.target.value)
        ? prev.extraIng.filter((el) => el !== e.target.value)
        : [...prev.extraIng, e.target.value],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    setOrder({ ...order, id });
    axios
      .post(" https://reqres.in/api/pizza ", order)
      .then((data) => {
        history.push("/success", order);
        console.log(data.data);
      })
      .catch((err) => {
        history.push("/not-found", err.message);
      });

    setOrder({ size: "", thickness: "", extraIng: [], note: "", name: "" });
  }

  return (
    <div onSubmit={handleSubmit} className="order-page">
      <SelectedPizzaDetails pizza={pizza} />
      <form className="order-form">
        <section>
          <div>
            <h3>Boyut seç</h3>
            {error.size && <p className="order-error">{error.size}</p>}
            {pizza.fixedSizes.map((fixedSize) => (
              <label htmlFor={fixedSize} key={fixedSize}>
                <input
                  type="radio"
                  id={fixedSize}
                  value={fixedSize}
                  checked={order.size === fixedSize}
                  name="pizzaSize"
                  onChange={(e) => setOrder({ ...order, size: e.target.value })}
                />{" "}
                {fixedSize.charAt(0).toUpperCase() + fixedSize.slice(1)}
              </label>
            ))}
          </div>
          <div>
            <h3> Hamur Kalınlığı</h3>
            {error.thickness && (
              <p className="order-error">{error.thickness}</p>
            )}
            <select
              selected
              value={order.thickness}
              onChange={(e) =>
                setOrder({ ...order, thickness: e.target.value })
              }
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
          {error.extraIng && <p className="order-error">{error.extraIng}</p>}
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div>
            {pizza.toppings.map((topping) => (
              <label key={topping}>
                <input
                  type="checkbox"
                  id="extras"
                  name="extras"
                  checked={order.extraIng.includes(topping)}
                  value={topping}
                  onChange={handleAddExtraIng}
                />
                {topping.charAt(0).toUpperCase() + topping.slice(1)}
              </label>
            ))}
          </div>
        </section>
        <section>
          <input
            type="text"
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
            placeholder="İsim-soyisim"
          />
          {error.name && <p className="order-error">{error.name}</p>}
          <h3>Sipariş Notu</h3>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={order.note}
            onChange={(e) => {
              setOrder({ ...order, note: e.target.value });
            }}
          />
        </section>
        <Button
          className="button-amount-change"
          type="button"
          onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
        >
          &#8722;
        </Button>
        {amount}
        <button
          className="button-amount-change"
          type="button"
          onClick={() => setAmount(amount + 1)}
        >
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
        <Button
          className="button-form-submit"
          type="submit"
          disabled={isDisabled}
        >
          Onayla
        </Button>
      </form>
    </div>
  );
}
