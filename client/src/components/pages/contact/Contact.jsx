import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Result =()  =>{
    return(
        <p> el correo ha sido enviado</p>
    )
}
export default function Contact() {
    const form = useRef();
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vssi6js', 'template_r4bat1d', e.target, 'XDUwjhfEUmUmEwcwn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
    


  return (
     <form action="" onSubmit={sendEmail}>
    <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>ME</span>
          </div>
          <div class="app-contact">CONTACT INFO : +52 866 123 45 67</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" name='fullName' required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" name='email' required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="PHONE" name='phone'required/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" name='message' required/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
              <div className="row">
                  {result ? <Result/>  : null}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form> 
  )
}
