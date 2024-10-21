import React, { useEffect } from 'react';
import arm_am from '../../assets/img/arm_am.png';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.left_anim_sec1, .right_anim_sec1');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);
};

const ShowCase = () => {
  useScrollAnimation();
  return (
    <section className="bg-secondary text-light p-md-5 p-4 text-center text-start">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
          <div className="d-flex flex-column gap-3 left_anim_sec1">
            <h1>Migration <span className="text-warning">Services</span></h1>
            <span className="text-warning text-bold">
              We are a team of experts, helping you realize your business ambitions and migration plans in Armenia.
            </span>
            <ul className="d-flex flex-column gap-2">
              <li className="text-start">✈️ Migration in Armenia: We accompany the entire migration process, help with visas, residence permits and citizenship.</li>
              <li className="text-start">🏢 Opening a company: Consultations and legal support when starting a business in Armenia.</li>
              <li className="text-start">💳 Account opening: Help with opening bank accounts in Armenia.</li>
              <li className="text-start">📜 Residence permit, Visas, Citizenship: Assistance with obtaining residence permit, visas and citizenship in Armenia.</li>
              <li className="text-start">💼 Business management: Business</li>
            </ul>
            <button className="btn btn-warning btn-lg mt-4 w-50 align-self-center get_start_btn">Start get service</button>
          </div>
          <img className="img-fluid arm_am right_anim_sec1" src={arm_am} alt="Armenian Pasport" />
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
