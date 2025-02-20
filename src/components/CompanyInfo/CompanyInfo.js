import React from "react";
// import petrochemImage from "../../images/petrochemImage.png";
import './CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <div className="info-container" style={{marginTop: "100px"}}>
      <div className="image-section">
        {/* <img src={petrochemImage} alt="Petrochem Industrial Setup" /> */}
      </div>
      <div className="text-section">
        <h2>Manufactured & Marketed By</h2>
        <h1>ARABIA PETROCHEM INDIA PVT LTD</h1>
        <p>
          <strong>Regd. Office:</strong> Office No. 01, Chetna Heights, Saibaba
          Nagar, Kondhwa Khurd, Pune 411048.
        </p>
        <p>
          <strong>Address:</strong> F618/1 Kondhwa Bebvewadi Road Bebvewadi Pune
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:arabia.petrochem@gmail.com">
            arabia.petrochem@gmail.com
          </a>
        </p>
        <p>
          <strong>Customer Care No.:</strong> 8180070870
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
