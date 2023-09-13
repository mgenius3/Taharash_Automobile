import { useRef } from "react";

export default function OurTeam() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };
  return (
    <div id="what_we_do" className="mt-0">
      <div className="change_button">
        <div className="prev" onClick={() => scroll(-100)}>
          <img width={25} src="/images/prev.png" alt="prev" />
        </div>
        <div className="prev" onClick={() => scroll(100)}>
          <img width={25} src="/images/nxt.png" alt="nxt" />
        </div>
      </div>
      <h1 className="poppins">OUR TEAM</h1>

      <div className="testimonial_section mt-1" ref={container}>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Anita Eghenure Business Admin.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Admin</p>
            <h5 className="card-title h5 poppins black">Anita Eghenure</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Anthony Abason Technician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Anthony Abason</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Christopher Sunday Auto Body Technician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Chris Sunday</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Emmanuel IkehTechician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Emmanuel Ikeh</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Genesis Dauda Technician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Genesis Dauda</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Ioryoosu Vincent IT Personnel.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">IT Personnel</p>
            <h5 className="card-title h5 poppins black"> Ioryoosu Vincent</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Justice Sunday Apprentice.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Apprentice</p>
            <h5 className="card-title h5 poppins black"> Justice Sunday</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Linus Samson Technician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Linus Samson</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Mariam Jude Accountant.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Accountant</p>
            <h5 className="card-title h5 poppins black">Mariam Jude</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Markus Luke Paint Repair Technician.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Technician</p>
            <h5 className="card-title h5 poppins black">Markus Luke</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>

        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Nicohlas Yari Technician & Supervisor.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Supervisor</p>
            <h5 className="card-title h5 poppins black">Nicohlas Yari</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>

        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Patrick Jacob Workshop Manager.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Manager</p>
            <h5 className="card-title h5 poppins black">Patrick Jacob</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>

        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Promise Oyum Serving Corper.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Corper</p>
            <h5 className="card-title h5 poppins black">Promise Oyum</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>

        <div className="card team_card">
          <div className="card_iage_container">
            <img
              src="/images/team/Tope Olufalade Apprentice.jpeg"
              className="card-img-top team_image"
              alt="team menmber"
            />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Apprentice</p>
            <h5 className="card-title h5 poppins black">Tope Olufalade</h5>
          </div>
          {/* <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div> */}
        </div>
      </div>

      <div className="what_we_do">
        <pre>
          <h3>
            As a customer-centric organization, we understand that your peace of
            mind is the most important thing. To achieve this, we prioritize
            doing your car repairs right the first time. We believe that highly
            qualified and experienced technicians are essential to providing
            efficient services.
          </h3>{" "}
          <p>
            {" "}
            That is why at Taharish, our team of technicians comprises industry
            experts, trained automobile engineers, and technicians with
            recognized skill qualifications, some of whom have over 15 years of
            experience with specialization in a wide range of makes and models
            of vehicle parts repair including tyres, exhausts, brakes, engine
            overhaul, panel beating and vehicle safety inspections as well as
            car wash service.{" "}
          </p>
          <p>
            Our primary focus is on delivering top-quality services to our
            clients. To ensure this, we provide ongoing training and
            certifications to our employees. In today's technical industry,
            keeping up with the latest changes is crucial to provide reliable
            services. Therefore, we have a dedicated training room in our
            facility to support our training programs.
          </p>
        </pre>
      </div>
    </div>
  );
}
