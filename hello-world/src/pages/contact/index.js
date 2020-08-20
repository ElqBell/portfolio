import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { SVGEmail, SVGEmailFallback } from "../../images";
import localStyles from "./contact.module.css";

function submitToAPI(e) {
  e.preventDefault();
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
    }
  };

  e.target.reset();

  // style to show while sending the message
  const button = document.getElementById("email-submit-button");
  button.textContent = "Sending the message";
  button.classList.remove(localStyles.alertSuccess, localStyles.alertError);
  button.classList.add(localStyles.alertWaiting);

  fetch(url, options).then(function(res){
    if(res.status === 200) {
      // success
      button.textContent = "Message sent";
      button.classList.remove(localStyles.alertError, localStyles.alertWaiting);
      button.classList.add(localStyles.alertSuccess);
      setTimeout(function(){
        button.classList.remove(localStyles.alertSuccess);
        button.textContent = "Submit";
      }, 3000);
    }
    else {
      // error
      button.textContent = "An error occurred";
      button.classList.remove(localStyles.alertSuccess, localStyles.alertWaiting);
      button.classList.add(localStyles.alertError);
      setTimeout(function(){
        button.classList.remove(localStyles.alertError);
        button.textContent = "Submit";
      }, 3000);
    }
  });
}

export default function Contact() {
  return (
    <Layout mainClass={localStyles.mainContent}>
       <Helmet>
        <title>{`DMD - Contact`}</title>
      </Helmet>
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
