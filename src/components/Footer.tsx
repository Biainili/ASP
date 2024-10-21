import React from "react";

const Footer = () => {
  return (
    <section className="">
      <footer className="text-center text-white bg-dark">
        <div className="container-lg container-fluid p-4">
          <ul className="d-flex flex-column gap-4 gap-lg-0 flex-lg-row justify-content-between">
            <li
              className="item_footer fs-5 card-animation"
              style={{ animationDelay: "0s" }}
            >
              <a href="/">Declarations</a>
            </li>
            <li
              className="item_footer fs-5 card-animation"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="/">Notarized translations</a>
            </li>
            <li
              className="item_footer fs-5 card-animation"
              style={{ animationDelay: "0.6s" }}
            >
              <a href="/">Licenses and permits</a>
            </li>
            <li
              className="item_footer fs-5 card-animation"
              style={{ animationDelay: "0.9s" }}
            >
              <a href="//" className="footer_item">Accounting</a>
            </li>
          </ul>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Mani Digital.com
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
