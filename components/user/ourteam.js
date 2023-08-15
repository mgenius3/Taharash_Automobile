import { useRef } from "react";


export default function OurTeam() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };
  return (
    <div id="what_we_do" className="mt-0">
      <div className="change_button">
        <div className="prev" onClick={() => scroll(-20)}>
          <img width={25} src="/images/prev.png" alt="prev" />
        </div>
        <div className="prev" onClick={() => scroll(20)}>
          <img width={25} src="/images/nxt.png" alt="nxt" />
        </div>
      </div>
      <div className="what_we_do">
        <h1 className="poppins">TESTIMONIALS</h1>
        <p className="p1 poppins">See what our customer <br/> say about us</p>
      </div>

      <div className="testimonial_section mt-1" ref={container}>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/Websalesprof.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team4.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team3.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team2.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
          <img src="/images/team1.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/Websalesprof.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team4.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team3.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team2.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>
        <div className="card team_card">
          <div className="card_iage_container">
            <img src="/images/team1.png" className="card-img-top team_image" alt="team menmber" />
          </div>
          <div className="card-body p-2">
            <p className="card-text p poppins black mt-3 mb-1">Property Expert</p>
            <h5 className="card-title h5 poppins black">Gerald Host</h5>
          </div>
          <div className="team_card_footer mt-2">
            <img width={20} src="/images/twitter.png" alt="twitter handle" />
            <img width={20} src="/images/linkedin.png" alt="twitter handle" />
            <img width={20} src="/images/instagram.png" alt="twitter handle" />
            <img width={20} src="/images/youtube.png" alt="twitter handle" />
          </div>
        </div>

      </div>

    </div>
  )
}
