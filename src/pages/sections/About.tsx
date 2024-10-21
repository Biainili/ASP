import React, { useEffect } from 'react';

// Import images
import slide1Img from '../../assets/img/SLID_1.png';
import yerImg from '../../assets/img/Yer.png';
import yeranImg from '../../assets/img/yeran.png';

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

    const elements = document.querySelectorAll('.left_anim_sec4, .right_anim_sec4');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);
};

const About = () => {
  useScrollAnimation();
  return (
    <section className="bg-warning text-light p-md-5 p-4 text-center">
      <div className="container">
        <h1 className="mb-5 pt-md-0 pt-5 text-uppercase">About us</h1>
        <div className="row container_about">
          <div
            className="col-lg-4 p-3 w-sm-50 bg-secondary bordRuP bord mb-8 left_anim_sec4 custom_margin_bottom"

          >
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner bordRuP bord">
                <div className="carousel-item active">
                  <img src={slide1Img} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={yerImg} className="d-block w-100" alt="Yer" />
                </div>
                <div className="carousel-item">
                  <img src={yeranImg} className="d-block w-100" alt="Yeran" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <ul className="mt-4 list-group custom_list">
              <li className="list-group-item custom_item">Team</li>
              <li className="list-group-item custom_item">About Armenia</li>
              <li className="list-group-item custom_item">Blog</li>
            </ul>
          </div>
          <div
            className="col-lg-6 col-12 text-start d-flex flex-column align-items-center gap-4 w-lg-50 mx-auto right_anim_sec4"
          >
            <div>
              <h3 className="text_black">
                Greetings in the world of migration law
              </h3>
              <span>
                We are a team of experienced specialists and lawyers ready to
                assist you in navigating the complex issues of migration
                legislation. Our mission is to ensure your legal stay and
                business activities in Armenia.
              </span>
            </div>

            <div>
              <h3 className="text_black">Expert guidance on migration matters</h3>
              <span>
                Migration issues can be complex and leave you feeling uncertain.
                We stand guard over your interests, providing comprehensive
                legal services, including obtaining work permits, creating and
                registering businesses, as well as preparing necessary documents
              </span>
            </div>

            <div>
              <h3 className="text_black">Reliable partnership</h3>
              <span>
                Our team has extensive experience in the field of migration law
                and is ready to offer you an individual approach and support at
                every stage of your process. We strive for clarity,
                transparency, and efficiency in every aspect of our services.
              </span>
            </div>

            <div>
              <h3 className="text_black">Contact us today</h3>
              <span>
                Reach out to us today to begin your path to legalization in
                Armenia. We guarantee professional service, as well as accurate
                and timely fulfillment of all your legal requirements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
