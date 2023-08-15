import { useRef } from "react";

export default function Portfolio() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };


  return (
    <div id="what_we_do" className="m-0">
      <div className="change_button">
        <div className="prev"  onClick={() => scroll(-20)}>
          <img width={25} src="/images/prev.png" alt="prev" />
        </div>
        <div className="prev" onClick={() => scroll(20)}>
          <img width={25} src="/images/nxt.png" alt="nxt"  />
        </div>
      </div>
      <div className="what_we_do">
        <h1 className="poppins">Our Portfolio</h1>
        <p className="p1 poppins">Some of our completed jobs</p>
      </div>

      <div className="portfolio_container"  ref={container}>
      <div className="portfolio" >
        <div>
          <div className=" small_image_card">
            <img src="/images/rangeroverupgrade.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Ranger Rover Upgrade</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" big_image_card">
            <img src="/images/exoticvehiclerepair.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Exotic Vehicle Repairs</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
        <div>
          <div className=" big_image_card">
            <img src="/images/carbodyspray.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Car Body Spray</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" small_image_card">
            <img src="/images/vehhiclediognosis.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Vehicle Diagnosis</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
      </div>
      <div className="portfolio" >
        <div>
          <div className=" small_image_card">
            <img src="/images/rangeroverupgrade.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Ranger Rover Upgrade</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" big_image_card">
            <img src="/images/exoticvehiclerepair.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Exotic Vehicle Repairs</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
        <div>
          <div className=" big_image_card">
            <img src="/images/carbodyspray.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Car Body Spray</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" small_image_card">
            <img src="/images/vehhiclediognosis.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Vehicle Diagnosis</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
      </div>
      <div className="portfolio" >
        <div>
          <div className=" small_image_card">
            <img src="/images/rangeroverupgrade.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Ranger Rover Upgrade</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" big_image_card">
            <img src="/images/exoticvehiclerepair.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Exotic Vehicle Repairs</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
        <div>
          <div className=" big_image_card">
            <img src="/images/carbodyspray.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Car Body Spray</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
          <div className=" small_image_card">
            <img src="/images/vehhiclediognosis.png" alt="portfolio image" />
            <h3 className="poppins black portfolio_title">Vehicle Diagnosis</h3>
            <p className="poppins black portfolio_body">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand</p>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}
