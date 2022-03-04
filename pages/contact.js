// React
import React from 'react';

// Components
import Head from 'next/head'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

// API
import {sendContactMail} from '../pages/api/mail-api.js'

export default function Home() 
{

  return (
    <div className="container">

      <Header/>

      <main className="main">
        
        <div className="section">
          <div className="bloc blue">
            <h1 className="titre-bloc">Formulaire de contact</h1>            
          </div>
        </div>

        <ContactForm />

      </main>

      <Footer/>

    </div>
  )
}

class ContactForm extends React.Component {

  constructor(props) 
  {
    super(props);
    this.state = 
    {
      objet: "",
      message: "",
      coordonnees : "",
      formButtontext: "Envoyer le message",
      messageSend: false
    }
  }

  render() 
  {
    const {objet,message,coordonnees,formButtontext,messageSend} = this.state;
    const btnClass = messageSend ? "disabled" : "";

    return (
      <div id="contact-form" className="section form">
          <div className="form-section v-group">
            <label className="titre-form-section">Objet</label>
            <input id="objet-input" type="text" value={objet} onChange={this.onObjetChange} />
          </div>
          <div className="form-section v-group">
            <label className="titre-form-section">Message</label>
            <textarea id="message-input" type="text" value={message} onChange={this.onMessageChange} />
          </div>
          <div className="form-section v-group">
            <label className="titre-form-section">Vos coordonnées</label>
            <textarea id="coordonnees-input" type="text" value={coordonnees} onChange={this.onCoordonneesChange} />
          </div>
          <div className="form-section v-group">
            <button className={"submit-button-form"+btnClass} onClick={this.submitContactForm}>{formButtontext}</button>
          </div>
      </div>
    )
  }

  onObjetChange = (event) => this.setState({objet: event.target.value})
  
  onMessageChange = (event) => this.setState({message: event.target.value})
  
  onCoordonneesChange = (event) => this.setState({coordonnees: event.target.value})

  submitContactForm = async (event) => 
  {
    event.preventDefault();

    const {objet,message,coordonnees} = this.state;
    const res = await sendContactMail(objet,message,coordonnees);
    
    if (res.status < 300) 
    {
      this.setState ({
        objet: "",
        message: "",
        coordonnees: "",
        formButtontext: "Message envoyé",
        messageSend: true
      })
    } 
    else 
    {
      this.setState({formButtontext: "Merci de remplir tous les champs."})
    }
  }

}
