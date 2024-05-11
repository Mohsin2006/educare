import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4d5aad18-c75c-4266-aae2-8bc74d4cb7bc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    }






  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a msg <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ducimus tempora laboriosam dignissimos facere esse! Culpa, eaque distinctio recusandae dicta pariatur velit, excepturi facere error explicabo eligendi est temporibus qui?</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@TheCodingCollege</li>
            <li><img src={phone_icon} alt="" />+1 123-456-789</li>
            <li><img src={location_icon} alt="" />USA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='enter your name' required />
            <label htmlFor="">Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your number' required />
            <label htmlFor="">Write your msg here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
