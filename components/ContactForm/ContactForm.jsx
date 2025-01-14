"use client";

import { useState } from "react";
import Image from "next/image";
import ContactFormStyle from "./ContactFormStyle.module.scss";

import PaperClip from "../../public/icons/paperClip.png";
import Arrow from "../../public/icons/longRight.png";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactFormData = new FormData();
    contactFormData.append("name", name);
    contactFormData.append("email", email);
    contactFormData.append("message", message);
    contactFormData.append("phone_number", phone);
    contactFormData.append("subject", subject);
    contactFormData.append('file', file);


    try {
      const response = await fetch("https://twc.efgroup.az/contact_form", {
        method: "POST",
        body: contactFormData,
      });

      if (response.ok) {
        setSuccess(
          <div className={ContactFormStyle.successContainer}>
            <p className={ContactFormStyle.success}>Müraciətiniz göndərildi.</p>
          </div>
        );
        setError('');
        // Clear the form fields
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setSubject("");
        setFile('');
      } else {
        const data = await response.json();
        setError(data.error || 'An error occurred while submitting the vacancy');
        setSuccess('');
        
      }
    } catch (error) {
      setError('An error occurred while submitting the vacancy');
      setSuccess('');
      console.error('Vacancy submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={ContactFormStyle.form}>
      <div className={ContactFormStyle.inputsContainer}>
        <div className={ContactFormStyle.inputsInnerLeft}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={ContactFormStyle.input}
            type="text"
            placeholder="Ad və Soyad"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={ContactFormStyle.input}
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={ContactFormStyle.input}
            type="tel"
            placeholder="Telefon"
            required
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={ContactFormStyle.input}
            type="text"
            placeholder="Mövzu başlığı"
            required
          />
        

        </div>

        <div className={ContactFormStyle.messageFile}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={ContactFormStyle.message}
            placeholder="Mesaj"
            required
          ></textarea>
          <label htmlFor="file" className={ContactFormStyle.labelFile}>
            <p className={ContactFormStyle.label}>Mesaj</p>
            <Image
              className={ContactFormStyle.paperClip}
              alt="Choose file"
              src={PaperClip}
            />
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            className={ContactFormStyle.file}
            type="file"
            required
          />
        </div>



      </div>

      <button type="submit" className={ContactFormStyle.submitButton}>
            Göndər
            <Image alt="Submit button" src={Arrow} />
          </button>

      {error && <div className={ContactFormStyle.error}>{error}</div>}
      {success && <div className={ContactFormStyle.success}>{success}</div>}
    </form>
  );
}

export default ContactForm;
