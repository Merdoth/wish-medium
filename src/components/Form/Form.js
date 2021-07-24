import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, Container } from '@material-ui/core';

import "./Form.scss";
import db from "../../firebase";

function Form() {
  const [value, setValues] = useState({ title: '', paragraph: '', url: ''});

  const changeValue = (e) => {
    setValues({...value, [e.target.name]: e.target.value});
  }

  const submit = (e) => {
    e.preventDefault(); 

    db.collection("posts").add({
      title: value.title,
      paragraph: value.paragraph,
      image: value.url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setValues({...value, title: '', paragraph: '', url: ''})
  };

  return (
    <form className="appForm" onSubmit={submit}>
      <Container>
        <h1>Create your Medium Post</h1>

        <div className="appForm__inputDivs">
          <p>Title</p>
          <input 
            value={value.title} 
            name="title" 
            type="text"  
            placeholder="Title..."
            onChange={changeValue}
          />
        </div>

        <div className="appForm__inputDivs">
          <p>Paragraph</p>
          <input 
            value={value.paragraph} 
            name="paragraph" 
            type="text"  
            placeholder="Paragraph..."
            onChange={changeValue}
          />
        </div>

        <div className="appForm__inputDivs">
          <p>Image URL</p>
          <input 
            value={value.url} 
            name="url" 
            type="text"  
            placeholder="Image URL"
            onChange={changeValue}
          />
        </div>

        <div className="appForm__submitBtn">
          <Button type="submit">Submit</Button>
        </div>
      </Container>
    </form>
  )
}

export default Form;
