import { useRef } from "react";
import Link from "next/link";

export default function OurShop() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };

  return (
    <div id="what_we_do" className="m-0">
      <div className="change_button">
        <div className="prev" onClick={() => scroll(-50)}>
          <img width={25} src="/images/prev.png" alt="prev" />
        </div>
        <div className="prev" onClick={() => scroll(50)}>
          <img width={25} src="/images/nxt.png" alt="nxt" />
        </div>
      </div>
      <div className="what_we_do">
        <h1 className="poppins">Our shop</h1>
        <p className="p1 poppins">Buy Your Dream Car Today</p>
      </div>

      <div className="portfolio_container" ref={container}>
        <div className="portfolio">
          <div>
            <div className=" small_image_card">
              <img
                src="/images/RangerRoverAutoBiographt.png"
                alt="portfolio image"
              />
              <h3 className="poppins black portfolio_title">
                Ranger Rover Auto Biographt(Available)
              </h3>
              <Link href="/automobile">
                <button className="buy_now poppins">Buy Now</button>
              </Link>
            </div>
            <div className=" big_image_card">
              <img src="/images/BMW6Series.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                BMW 6 Series(Available)
              </h3>
              <Link href="/automobile">
                <button className="buy_now poppins">Buy Now</button>
              </Link>
            </div>
          </div>
          <div>
            <div className=" big_image_card">
              <img src="/images/MercedesBenz2022.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Mercedes Benz 2022(Available)
              </h3>
              <Link href="/automobile">
                <button className="buy_now poppins">Buy Now</button>
              </Link>
            </div>
            <div className=" small_image_card">
              <img src="/images/Jaguar.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Jaguar(Available)
              </h3>
              <Link href="/automobile">
                <button className="buy_now poppins">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div>
            <div className=" small_image_card">
              <img
                src="/images/RangerRoverAutoBiographt.png"
                alt="portfolio image"
              />
              <h3 className="poppins black portfolio_title">
                Ranger Rover Auto Biographt(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
            <div className=" big_image_card">
              <img src="/images/BMW6Series.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                BMW 6 Series(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
          </div>
          <div>
            <div className=" big_image_card">
              <img src="/images/MercedesBenz2022.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Mercedes Benz 2022(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
            <div className=" small_image_card">
              <img src="/images/Jaguar.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Jaguar(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div>
            <div className=" small_image_card">
              <img
                src="/images/RangerRoverAutoBiographt.png"
                alt="portfolio image"
              />
              <h3 className="poppins black portfolio_title">
                Ranger Rover Auto Biographt(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
            <div className=" big_image_card">
              <img src="/images/BMW6Series.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                BMW 6 Series(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
          </div>
          <div>
            <div className=" big_image_card">
              <img src="/images/MercedesBenz2022.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Mercedes Benz 2022(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
            <div className=" small_image_card">
              <img src="/images/Jaguar.png" alt="portfolio image" />
              <h3 className="poppins black portfolio_title">
                Jaguar(Available)
              </h3>
              <button className="buy_now poppins">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
