import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_0bgaxgd",  
      "template_hu8pa2y", 
      form.current,
      "kQ37pCW5y-z-r_g6h" 
    )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          setMessageSent(true);
          form.current.reset(); 
        },
        (error) => {
          console.log("❌ Error sending email:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
           
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg cursor-pointer">
              Send Message
            </button>
            {messageSent && <p className="text-green-500 mt-3">✅ Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
