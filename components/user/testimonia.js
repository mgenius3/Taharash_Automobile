import { useRef } from "react";


export default function Testimonia() {
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
          <img width={25} src="/images/nxt.png" alt="nxt"/>
        </div>
      </div>
      <div className="what_we_do">
        <h1 className="poppins">TESTIMONIALS</h1>
        <p className="p1 poppins">See what our customer <br/> say about us</p>
      </div>

      <div className="testimonial_section" ref={container}>
        {[1,2,3,4,5,6,7,8,9].map(()=>
          <div className="testimonia">
            <p className="poppins black">Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service</p>
            <div className="testimonial_profile">
              <div className="testimonial_profile_image">
                <img src="/images/testimoniaprofile.jpg" alt="profile" />
              </div>
              <div >
                <p className="mb-0 black tes_name">Emily Stones  </p>
                <p className="mb-0 black tes_title">CEO, Marketing Guru</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
