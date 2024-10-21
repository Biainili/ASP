import React from "react";
import { CardDataService } from "../modules/CardDataService";

const Card: React.FC<CardDataService> = ({
  title,
  text,
  imgSrc,
  m_text,
  fields,
  id,
}) => {
  const modalId = `exampleModal${id}`;
  return (
    <div className="card bg-warning text-light" style={{ width: "22rem" , animationDelay: `${id * 0.1}s`}}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title text_black">{title}</h5>
        <p className="card-text">{text}</p>
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        >
          Get Started
        </button>
      </div>
      {/* Modal For Migration Armenia START */}
      <div
        className="modal fade text-dark"
        id={modalId}
        tabIndex={-1}
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 text_black"
                id={`${modalId}Label`}
              >
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-blak">
              <span className="text-center fs-4">{m_text}</span>

              <div className="row mt-4 p-2">
                <div className="col-lg">
                  <div className="text-center" title="visa">
                    <h4 className="bg-warning custom_titel_a">
                      {fields.visaConsultation && fields.visaConsultation[0]}
                    </h4>
                    <ul className="list-unstyled custUl">
                      {fields.visaConsultation &&
                        fields.visaConsultation.map(
                          (item, index) =>
                            index > 0 && (
                              <li key={index} className="custli">
                                {item}
                              </li>
                            )
                        )}
                    </ul>
                    <img
                      src={
                        fields.icon_aps ? fields.icon_aps[0] : "/default.png"
                      }
                      alt="/"
                      className="img_icon"
                    />
                  </div>
                </div>

                <div className="col-lg">
                  <div className="text-center" title="visa">
                    <h4 className="bg-warning custom_titel_a">
                      {fields.relocationAssistance &&
                        fields.relocationAssistance[0]}
                    </h4>
                    <ul className="list-unstyled custUl">
                      {fields.relocationAssistance &&
                        fields.relocationAssistance.map(
                          (item, index) =>
                            index > 0 && (
                              <li key={index} className="custli">
                                {item}
                              </li>
                            )
                        )}
                    </ul>
                    <img
                      src={
                        fields.icon_aps ? fields.icon_aps[1] : "/default.png"
                      }
                      alt="/"
                      className="img_icon"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-4 p-2">
                <div className="col-lg">
                  <div className="text-center" title="visa">
                    <h4 className="bg-warning custom_titel_a">
                      {fields.documentTranslation &&
                        fields.documentTranslation[0]}
                    </h4>
                    <ul className="list-unstyled custUl">
                      {fields.documentTranslation &&
                        fields.documentTranslation.map(
                          (item, index) =>
                            index > 0 && (
                              <li key={index} className="custli">
                                {item}
                              </li>
                            )
                        )}
                    </ul>
                    <img
                      src={
                        fields.icon_aps ? fields.icon_aps[2] : "/default.png"
                      }
                      alt="/"
                      className="img_icon"
                    />
                  </div>
                </div>
                <div className="col-lg">
                  <div className="text-center" title="visa">
                    <h4 className="bg-warning custom_titel_a">
                      {fields.legalSupport && fields.legalSupport[0]}
                    </h4>
                    <ul className="list-unstyled custUl">
                      {fields.legalSupport &&
                        fields.legalSupport.map(
                          (item, index) =>
                            index > 0 && (
                              <li key={index} className="custli">
                                {item}
                              </li>
                            )
                        )}
                    </ul>
                    <img
                      src={
                        fields.icon_aps ? fields.icon_aps[3] : "/default.png"
                      }
                      alt="/"
                      className="img_icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-dark">
                Order a service
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal For Migration Armenia END */}
    </div>
  );
};

export default Card;
