import { useLocation } from "react-router-dom";
import "./Success.css";

export default function Success() {
  const location = useLocation();
  const data = location.state;
  console.log("enter success");
  console.log(data);
  console.log(location);

  return (
    <div className="success">
      <p>Lezzetin yolda</p>
      <p> Sipariş Alındı.</p>
      <h6>Position Absolute Acı Pizza</h6>
      <p>Boyut: {data.size}</p>
      <p>Hamur: {data.thickness}</p>
      <p>
        Ek malzemeler:{" "}
        {data.extraIng.map((item) => (
          <span key={item}>{item} </span>
        ))}{" "}
      </p>
    </div>
  );
}
