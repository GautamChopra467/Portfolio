import React from 'react';
import './FormStyles.css';
import emailjs from 'emailjs-com';

const Form = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ma2ynre','template_vpw2nth',e.target,'ORx4KmmshQ0g-mCtZ').then(
      (result) => {
        console.log('email sent');
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className='form'>
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name='name'></input>
        <label>Email</label>
        <input type='email' name='user_email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows="6" name='message' placeholder="Type Your Message Here" />
        <button className='btn'>Contact</button>
      </form>
    </div>
  )
}

export default Form;
