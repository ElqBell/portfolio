import React from "react";
import Layout from "../../components/layout";
import { SVGEmail, SVGEmailFallback } from "../../images";
import localStyles from "./contact.module.css";

function submitToAPI(e) {
  e.preventDefault();
  e.target.reset();
  const url = 'https://3jxqp8oiza.execute-api.eu-central-1.amazonaws.com/beta/contact/';
  
  const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      msg: document.getElementById("message").value
  };
  
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cross-Domain': 'true'
    }
  };
  
  fetch(url, options)
    .then(function(res){return res.json()})
    .then(function(res){console.log(res)});
}

export default function Contact() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <section>
        <h1 className="heading-1">Send me a message.</h1>
        <form id="contact-form" onSubmit={submitToAPI}>
          <div>
            <label htmlFor="name">Name</label>
            <label htmlFor="email">Email</label><br/>
            <input type="text" id="name" name="name" required />
            <input type="email" id="email" name="email" required />
          </div>
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message" required />

          <button type="submit" id="email-submit-button" className="button">Submit</button>
        </form>
      </section>
      <aside>
        <h2 className="heading-2">Or if you'd rather</h2>
        <h2 className="heading-2">contact me directly:</h2>
        <a href="mailto:deimantas.butenas@gmail.com">deimantas.butenas<p>@gmail.com</p></a>
        <img src={SVGEmail} onError={function(){this.src=SVGEmailFallback}} alt="" />
      </aside>
    </Layout>
  );
}
