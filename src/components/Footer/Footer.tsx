import "./Footer.css";
import "../../../Assets/mile2-assets/footer/icons/icon-1.png";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <h2>Teknolojik Yemekler</h2>

        <p>
          <img
            src="../../../Assets/mile2-assets/footer/icons/icon-1.png"
            alt="konum ikonu"
          />
          341 Londonderry Road, Istanbul Türkiye
        </p>
        <p>
          <img
            src="../../../Assets/mile2-assets/footer/icons/icon-2.png"
            alt="mail ikonu"
          />
          aciktim@teknolojikyemekler.com
        </p>

        <p>
          <img
            src="../../../Assets/mile2-assets/footer/icons/icon-3.png"
            alt="telefon ikonu"
          />
          +90 216 123 45 67
        </p>
      </div>
      <div className="footer-quick-menu">
        <h4>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </h4>
      </div>
      <div>
        <h4>Instagram</h4>
      </div>
    </div>
  );
};

export default Footer;
