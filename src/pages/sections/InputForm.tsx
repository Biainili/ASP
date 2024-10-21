import React, { useRef, useState, useEffect } from 'react';
import iconServ from '../../assets/img/888-ICON_SERV.png';
import emailjs from '@emailjs/browser';

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

    const elements = document.querySelectorAll('.left_anim_sec1, .right_anim_sec1, .left_anim_sec2, .right_anim_sec2, .left_anim_sec4, .right_anim_sec4, .card-animation');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);
};

const InputForm: React.FC = () => {
  useScrollAnimation();

  const form = useRef<HTMLFormElement>(null);
  const [vel, setVel] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get('from_name') as string;
      const email = formData.get('from_email') as string;
      const phone = formData.get('phone_number') as string;
      const serviceType = formData.get('service_type') as string;
      const message = formData.get('message') as string;

      if (!name || !email || !phone || !serviceType || !message) {
        setError('Please fill in all fields.');
        return;
      }

      setError(null);
      setVel(true);

      emailjs.sendForm('service_s9pjtdk', 'template_rs5u63s', form.current, 'grDIm5496TqCWYQmK')
        .then((result) => {
          console.log(result.text);
          form.current?.reset();
          setVel(true);
        }, (error) => {
          console.log(error.text);
          setVel(false);
        });
    }
  };

  return (
    <section className="bg-warning text-light p-5 ">
      <div className="container">
        <div className="d-md-flex justify-content-between md-justify-content-center align-items-center gap-4">
          <div className="coustem_for_sibmet left_anim_sec2">
            <h3 className="mb-3 mb-md-0 text-center coustem_h3 text-uppercase">
              Send a service purchase request
            </h3>
            <img src={iconServ} alt="" className="w_serv_img" />
          </div>

          <form ref={form} onSubmit={sendEmail} className="w_size right_anim_sec2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type your Name Surname"
                name='from_name'
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Type your Email address"
                name='from_email'
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Type your Phone number"
                name='phone_number'
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">
                Service type
              </label>
              <select className="form-select" aria-label="Default select example" name='service_type'>
                <option value="" selected>Open this select menu</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Type your message"
                name='message'
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark w-100 btn_custom">
              Submit
            </button>
            {error && <p className='mt-4 text-center text-danger'>{error}</p>}
            {vel && <p className='mt-4 text-center'>Your request has been sent, thank you</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default InputForm;
