import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, address, message } = formData;

        // Prepare the WhatsApp message link with form data
        const encodedMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`;
console.log(encodedMessage);
        const whatsappLink = `https://wa.me/8273885707?text=${encodeURIComponent(encodedMessage)}`;
        // Redirect to WhatsApp
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="contactContainer" id='Contact'>
            <div className="title">
                <h2>Contact Us</h2>
            </div>
            <div className="contactBox">
                <div className="contact form">
                    <h3>Send A Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                     <span>Your Name</span>
                                    <input type="text" name="name" id="" onChange={handleChange}/>
                                </div>
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type='email' name="email" id="" onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="row50">
                                <div className="inputBox">
                                    <span>Phone</span>
                                    <input type='tel' name="phone" id="" onChange={handleChange}/>
                                </div>
                                <div className="inputBox">
                                    <span>Current Address</span>
                                    <input type='text' name="address" id="" onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="row100">
                                <div className="inputBox">
                                    <span>Write Us</span>
                                    <textarea name="message" id="" cols="30" rows="5" onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Submit" onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact info">
                    <h3>Contact Info</h3>
                    <div className="infoBox">
                        <div>
                            <span><ion-icon name="pin"></ion-icon></span>
                            <a href="https://goo.gl/maps/YCppuCJB9NQPHVwk9" target='_blank'>A-148, Sector-1, Vedvyaspuri, <br /> Meerut - 250002</a>
                        </div>
                        <div>
                            <span><ion-icon name="mail"></ion-icon></span>
                            <a href="mailto:support@knhoatel.com" target='_blank'>support@knhoatel.com</a>
                        </div>
                        <div>
                            <span><ion-icon name="call"></ion-icon></span>
                            <a href="tel:+918171168749" target='_blank'>+91 817 116 8749</a>
                        </div>
                        <div>
                            <span><ion-icon name="logo-whatsapp"></ion-icon></span>
                            <a href="https://wa.me/8273885707?text=Namaste" target='_blank'>+91 827 388 5707</a>
                        </div>
                    </div>
                </div>
                <div className="contact map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.952504821613!2d77.63869647539343!3d28.959133175487874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c679a6122e793%3A0xa9bcbca7789d9333!2sKN%20Girl%20Hostel%20-%202!5e0!3m2!1sen!2sin!4v1686127823303!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact

