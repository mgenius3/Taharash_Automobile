

export default function GetQuote() {
  return (
    <div id="get_a_quote" className="mt-0 get_a_quote">
      <div className="what_we_do text_center">
        <h1 className="poppins">GET A QUOTE TODAY</h1>
        <p className="p1 poppins mb-1">SHow can We Help You?</p>
        <p className="poppins send_message">Please  Send A message </p>
      </div>

      <form className="quote_form mt-1">
        <input placeholder="Enter Your Full Name" className="quote_input mt-4" />
        <input placeholder="Enter Your Email Adress" className="quote_input mt-4" />
        <input placeholder="How Can we Be Of Service To You?" className="quote_input mt-4" />
        <button className="buy_now poppins mt-4">Get A Quote</button>
      </form>

    </div>
  )
}
