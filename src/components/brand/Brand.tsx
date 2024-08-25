import "./brand.css";

import { FaFacebook, FaLinkedin, FaWhatsapp, FaMailBulk } from "react-icons/fa";

function Brand() {
  const size = 35;
  const color = "rgb(255, 255, 255)";

  return (
    <div className="gpt3__brand" id="brand">

      <FaLinkedin
        title="redd axe linkedIn"
        onClick={() =>
        (window.location.href =
          "https://www.linkedin.com/in/blessing-luphahla")
        }
        color={color}
        size={size}
      ></FaLinkedin>
      <FaWhatsapp
        title="redd axe whatsapp"
        onClick={() =>
        (window.location.href =
          "whatsapp://send?phone=+263788793302&text=Hi Redd Axe!!!")
        }
        color={color}
        size={size}
      ></FaWhatsapp>
      <FaMailBulk
        title="redd axe Email"
        onClick={() =>
          (window.location.href = "mailto: luphahlablessingthamsanqa@gmail.com")
        }
        color={color}
        size={size}
      ></FaMailBulk>
      <FaFacebook
        title="redd axe facebook"
        onClick={() => (window.location.href = "https://www.facebook.com/profile.php?id=61561309891139&mibextid=ZbWKwL")}
        color={color}
        size={size}
      ></FaFacebook>
    </div>
  );
}

export default Brand;
