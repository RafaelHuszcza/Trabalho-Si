import React, { useState } from "react";


import "./styles.css";


const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

  function handleSubmitClick(e) {
    e.preventDefault()
    console.log(`Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMessage: ${message}`)
  }
  
  return (
    <div className="contact">
      <form className="contactContainer" onSubmit={handleSubmitClick}>

        <h2>Quer falar com a gente?</h2>
        <p>Preencha as suas informações abaixo para entrar em contato com o MetaTeam</p>

        <label htmlFor="name">Nome</label> 
        <input type='text' onChange={(e) => setName(e.currentTarget.value)} placeholder='Seu nome' />
        <label htmlFor="name">Email</label> 
        <input type='text' onChange={(e) => setEmail(e.currentTarget.value)} placeholder='johndoe@email.com' />
        <label htmlFor="name">Telefone</label> 
        <input type='text' onChange={(e) => setPhone(e.currentTarget.value)} placeholder='(11) 99999-9999' />
        <label htmlFor="name">Mensagem</label>
        <textarea aria-multiline onChange={(e) => setMessage(e.currentTarget.value)} rows={7} placeholder='Sua mensagem...' /> 
 
        <input type="submit" value="Enviar" />

      </form>   
    </div>
  );
};

export default ContactUs;
