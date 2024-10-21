import React from 'react';
import CardSevices from '../../components/CardSevices';
import cardServiseData from '../../assets/Data/cardServiseData';

const Services = () => {
  return (
    <section className="bg-secondary text-light p-md-5 p-4 text-center">
      <div className="container">
        <h1 className="mb-5 pt-md-0 pt-0 text-uppercase">Services</h1>
        <div className="row text-center gap-4 mb-4 ">
          {cardServiseData.map((card, index) => (
            <div key={index} className="col-sm d-flex justify-content-center">
              <CardSevices
                key={index}
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
                m_text={card.m_text}
                fields={card.fields}
                id={card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
