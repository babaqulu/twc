"use client"

import { useState } from 'react';
import Image from 'next/image';
import VacancyFormStyle from './VacancyFormStyle.module.scss';

import PaperClip from '../../public/icons/paperClip.png';
import Arrow from "../../public/icons/longRight.png";

function VacancyForm({lang}) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('full_name', name);
    formData.append('email', email);
    formData.append('number', number);  // Phone number as string
    formData.append('subject', subject);
    formData.append('message', text);

    try {
      const response = await fetch('https://twc.efgroup.az/submit_vacancy', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccess('Vakansiya müraciəti göndərildi!');
        setError('');
        // Clear the form fields
        setEmail('');
        setNumber('');
        setName('');
        setText('');
        setSubject('');
        setFile(null);
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
    <form onSubmit={handleSubmit} className={VacancyFormStyle.form}>
      <div className={VacancyFormStyle.inputsContainer}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={VacancyFormStyle.input}
          type="text"
          placeholder={lang==='az' ? "Ad və Soyad" : "Name and Surname"}
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={VacancyFormStyle.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={VacancyFormStyle.input}
          type="tel"
          placeholder={lang==='az' ? "Telefon" : "Phone number"}
          required
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={VacancyFormStyle.input}
          type="text"
          placeholder= {lang === 'az' ? "Mövzu başlığı" : "Topic title"}
          required
        />
        <div className={VacancyFormStyle.messageFile}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={VacancyFormStyle.message}
            placeholder="..."
            required
          ></textarea>
          <label htmlFor="file" className={VacancyFormStyle.labelFile}>
            <p className={VacancyFormStyle.label}>{lang ==='az' ? "Mesaj" : "Message"}</p>
            <Image
              className={VacancyFormStyle.paperClip}
              alt="Choose file"
              src={PaperClip}
            />
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            className={VacancyFormStyle.file}
            type="file"
            required
          />
        </div>
        <button type="submit" className={VacancyFormStyle.submitButton}>
          {lang==='az' ? "Göndər" : "Send"}
          <Image alt="Submit button" className={VacancyFormStyle.submitIcon} src={Arrow} />
        </button>
      </div>
      {error && <p className={VacancyFormStyle.error}>{error}</p>}
      {success && <p className={VacancyFormStyle.success}>{success}</p>}
    </form>
  );
}

export default VacancyForm;
