import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!name || !email || !message) {
      toast.error("Please fill in all the fields!");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://gym-website-backend-2vwe.onrender.com",
        { name, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message || "Message sent successfully!");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to send message. Try again."
      );
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
