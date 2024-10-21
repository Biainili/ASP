import React, { useState } from "react";
import TelphonImg from "../../assets/img/telephone.png";
import WhatsApp from "../../assets/img/whatsapp.png";
import TelegramImg from "../../assets/img/telegram.png";
import EmailImg from "../../assets/img/email10.png";

const Contactus = () => {
  const [visibrlPhone, setVisibrlPhone] = useState(false);
  const [visibrlWhats, setVisibrlWhats] = useState(false);
  const [visibrlTeleg, setVisibrlTeleg] = useState(false);
  const [visibrlEmail, setVisibrlEmail] = useState(false);

  const hoverOn = () => {
    setVisibrlPhone(true);
  };
  const hoverOff = () => {
    setVisibrlPhone(false);
  };
  const hoverOnWhats = () => {
    setVisibrlWhats(true);
  };
  const hoverOffWhats = () => {
    setVisibrlWhats(false);
  };
  const hoverOnTeleg = () => {
    setVisibrlTeleg(true);
  };
  const hoverOffTeleg = () => {
    setVisibrlTeleg(false);
  };
  const hoverOnEmail = () => {
    setVisibrlEmail(true);
  };
  const hoverOffEmail = () => {
    setVisibrlEmail(false);
  };

  return (
    <section className="bg-secondary text-light p-md-5 p-4 text-center">
      <div className="container">
        <h1 className="mb-5 pt-md-0 pt-0 text-uppercase">Contact us</h1>
        <div className="container">
          <div className="row mb-md-5 mb-3 gap-3">
            <div
              className="col-md card-animation"
              style={{ animationDelay: "0s" }}
            >
              <div onMouseEnter={hoverOn} onMouseLeave={hoverOff} className="mb-3 bg-warning item_contact">
                <img src={TelphonImg} alt="Telephone" className="icon_size" />
                <a className="text_black" href="tel:+37433557565" rel="noreferrer">
                  {visibrlPhone === false ? (
                    <span>Phone Nubmer</span>
                  ) : (
                    <span>+374 33 55 75 65</span>
                  )}
                </a>
              </div>
            </div>
            <div
              className="col-md card-animation"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-3 bg-warning item_contact" onMouseEnter={hoverOnWhats} onMouseLeave={hoverOffWhats} >
                <img src={WhatsApp} alt="WhatsApp" className="icon_size" />
                <a className="text_black" href="https://wa.me/79166069633" rel="noreferrer">{!visibrlWhats ? <span>What's App</span> : <span>+7 916 606 96 33</span>}</a>
              </div>
            </div>
          </div>
          <div className="row gap-3">
            <div
              className="col-md card-animation"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="mb-3 bg-warning item_contact" onMouseEnter={hoverOnTeleg} onMouseLeave={hoverOffTeleg} >
                <img src={TelegramImg} alt="Telegram" className="icon_size" />
                <a className="text_black" href="https://t.me/mode_mani" rel="noreferrer">{!visibrlTeleg ? <span>Telegram</span> :<span>https://t.me/mode_mani</span>}</a>
              </div>
            </div>
            <div
              className="col-md card-animation"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="mb-3 bg-warning item_contact" onMouseEnter={hoverOnEmail} onMouseLeave={hoverOffEmail} >
                <img src={EmailImg} alt="Email" className="icon_size" />
                <a className="text_black" href="mailto:barkhudaryan005@gmail.com" rel="noreferrer"> {!visibrlEmail ? <span>Email</span>:<span>barkhudaryan005@gmail.com</span>}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
