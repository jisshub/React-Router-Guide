import React from 'react'
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
        <h1>Hey {name}, Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis natus eligendi in adipisci culpa fugiat distinctio possimus debitis enim reiciendis harum recusandae quaerat accusantium quas, ex qui nulla consectetur.</p>
    </div>

  )
}
