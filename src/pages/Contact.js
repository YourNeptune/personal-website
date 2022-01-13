import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsGithub, BsEnvelopeFill, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="Contact flex flex-col flex-center">
      <h1 className="Title">Contact</h1>
      <p className="Contact_subtitle">
        Feel free to contact me for career prospects, business services, and
        other professional inquiries!
      </p>
      <section>
        <div className="Contact__info flex">
          <HiLocationMarker size={30}/>
          <p>Toronto, ON, Canada</p>
        </div>
        <div className="Contact__info flex">
          <BsEnvelopeFill size={30}/>
          <p>lixuanluo@hotmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
