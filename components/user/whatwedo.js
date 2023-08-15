import { useRef } from "react";

export default function WhatWeDo() {
    const container = useRef(null);
  
    const scroll = (scrollOffset) => {
      container.current.scrollLeft += scrollOffset;
    };
  return (
    <div id="what_we_do">
        <div className="change_button">
        <div className="prev" onClick={() => scroll(-20)}>
            <img width={25} src="/images/prev.png" alt="prev" />
        </div>
        <div className="prev" onClick={() => scroll(20)}>
            <img width={25} src="/images/nxt.png" alt="nxt" />
        </div>
        </div>
        <div className="what_we_do">
        <h1 className="poppins">What we do</h1>
        <p className="p1 poppins">We provide the Perfect Solution <br/> for your vehicles!!!</p>
        </div>

        <div className="what_to_do_card" ref={container}>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Diagnostic Check</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Air Condition Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Brake System Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Suspension & Steering Systems Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Diagnostic Check</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Air Condition Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Brake System Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Suspension & Steering Systems Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Diagnostic Check</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Air Condition Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Brake System Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>
        <div className="to_do_card">
            <div className="image">
            <img width={30} src="/images/activitylogo.png" alt='activity' />
            </div>
            <h4 className="poppins">Suspension & Steering Systems Repairs</h4>
            <p className="poppins">We help identify the best ways to improve your business</p>
            <button>Learn More <img width={15} src="/images/learnmore.png" alt="learn more" /></button>
        </div>

        </div>

    </div>
  )
}
