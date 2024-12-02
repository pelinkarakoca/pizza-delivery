import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SelectedPizzaDetails from "./SelectedPizzaDetails";
import "./Order.css";
import Button from "../Button/Button";

interface Pizza {
  price: string;
  fixedSizes: string[];
  toppings: string[];
}

interface OrderFormInputs {
  size: string;
  thickness: string;
  extraIng: string[];
  note: string;
  name: string;
  amount: number;
}

interface OrderProps {
  pizza: Pizza;
}

export default function Order({ pizza }: OrderProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderFormInputs>({
    defaultValues: {
      size: "",
      thickness: "default",
      extraIng: [],
      note: "",
      name: "",
      amount: 1,
    },
  });

  const history = useHistory();
  const extraIng = watch("extraIng", []);
  const amount = watch("amount", 1);
  const extraIngPrices = extraIng.length * 5;
  const totalPrice = amount * (+pizza.price.slice(0, -1) + extraIngPrices);

  const onSubmit: SubmitHandler<OrderFormInputs> = (data) => {
    const id = crypto.randomUUID();
    const finalOrder = { ...data, id };

    axios
      .post("https://reqres.in/api/pizza", finalOrder)
      .then(() => history.push("/success", finalOrder))
      .catch((err) => history.push("/not-found", err.message));
  };

  return (
    <div className="order-page">
      <SelectedPizzaDetails pizza={pizza} />
      <form onSubmit={handleSubmit(onSubmit)} className="order-form">
        {/* Pizza Size */}
        <section>
          <h3>Boyut seç</h3>
          {errors.size && <p className="order-error">{errors.size.message}</p>}
          {pizza.fixedSizes.map((fixedSize) => (
            <label htmlFor={fixedSize} key={fixedSize}>
              <input
                type="radio"
                {...register("size", {
                  required: "Lütfen pizza boyutu seçiniz",
                })}
                value={fixedSize}
              />
              {fixedSize.charAt(0).toUpperCase() + fixedSize.slice(1)}
            </label>
          ))}
        </section>

        {/* Dough Thickness */}
        <section>
          <h3>Hamur Kalınlığı</h3>
          {errors.thickness && (
            <p className="order-error">{errors.thickness.message}</p>
          )}
          <select
            {...register("thickness", {
              validate: (value) =>
                value !== "default" || "Lütfen hamur kalınlığı seçiniz",
            })}
          >
            <option value="default" disabled>
              -- Hamur kalınlığı seç --
            </option>
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
          </select>
        </section>

        {/* Extra Ingredients */}
        <section>
          <h3>Ek Malzemeler</h3>
          {errors.extraIng && (
            <p className="order-error">{errors.extraIng.message}</p>
          )}
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {pizza.toppings.map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                {...register("extraIng", {
                  validate: (extraIng) =>
                    extraIng.length >= 4 || "Lütfen en az dört malzeme seçiniz",
                })}
                value={topping}
              />
              {topping.charAt(0).toUpperCase() + topping.slice(1)}
            </label>
          ))}
        </section>

        {/* Customer Name and Note */}
        <section>
          <input
            type="text"
            {...register("name", {
              required: "Lütfen geçerli bir isim giriniz",
              minLength: { value: 5, message: "İsim en az 5 karakter olmalı" },
            })}
            placeholder="İsim-soyisim"
          />
          {errors.name && <p className="order-error">{errors.name.message}</p>}

          <h3>Sipariş Notu</h3>
          <textarea
            {...register("note")}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </section>

        {/* Amount Buttons */}
        <Button
          type="button"
          onClick={() => setValue("amount", Math.max(amount - 1, 1))}
        >
          &#8722;
        </Button>
        {amount}
        <Button type="button" onClick={() => setValue("amount", amount + 1)}>
          &#43;
        </Button>

        {/* Order Summary */}
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

        <Button type="submit" className="button-form-submit">
          Onayla
        </Button>
      </form>
    </div>
  );
}
