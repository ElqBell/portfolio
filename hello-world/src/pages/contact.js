import React from "react";
import Layout from "../components/layout";
import svgImage from "../images/svg/email-send-letter.svg";
import fallbackImage from "../images/svg/gallery-img.jpg";

export default function Contact() {
  return (
    <Layout>
      <section>
        <h1>Send me a message</h1>
        <form onsubmit="">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message</label>
          <textarea type="text" id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </section>
      <aside>
        <h3>Or if you'd rather contact me directly:</h3>
        <h3>
          <a href="mailto:deimantas.butenas@gmail.com">
            deimantas.butenas@gmail.com
          </a>
        </h3>
        <img src={svgImage} onerror={`this.src=${fallbackImage}`} alt="" />
      </aside>
    </Layout>
  );
}
