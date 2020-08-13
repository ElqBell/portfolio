import React from "react";
import Layout from "../../components/layout/layout";
import svgImage from "../../images/svg/email-send-letter.svg";
import fallbackImage from "../../images/svg/gallery-img.jpg";
import localStyles from "./contact.module.css";

export default function Contact() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <section>
        <h1 className="heading-1">Send me a message</h1>
        <form onSubmit="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message" required />

          <button type="submit" className="button">Submit</button>
        </form>
      </section>
      <aside>
        <h2 className={`heading-2 ${localStyles.testas}`}>Or if you'd rather contact me directly:</h2>
        <h2 className="heading-2">
          <a href="mailto:deimantas.butenas@gmail.com">
            deimantas.butenas@gmail.com
          </a>
        </h2>
        <img src={svgImage} onError={function(){this.src=fallbackImage}} alt="" />
      </aside>
    </Layout>
  );
}
