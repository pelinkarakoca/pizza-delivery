import { useLocation } from "react-router-dom";
import "./Success.css";
import { FC } from "react";
//TODO - interface'leri type diye ayrı bir yere taşı

interface LocationState {
  state: {
    size: string;
    thickness: string;
    extraIng: string[];
  };
}

const Success: FC = () => {
  const location: LocationState = useLocation();
  const data = location.state;

  console.log("enter success");
  console.log("print data");
  console.log(data);

  return (
    <div className="success">
      <p>Lezzetin yolda</p>
      <p> Sipariş Alındı.</p>
      <h6>Position Absolute Acı Pizza</h6>
      <p>Boyut: {data?.size}</p>
      <p>Hamur: {data?.thickness}</p>
      <p>
        Ek malzemeler:{" "}
        {data?.extraIng.map((item: string) => (
          <span key={item}>{item} </span>
        ))}{" "}
      </p>
    </div>
  );
};

export default Success;
