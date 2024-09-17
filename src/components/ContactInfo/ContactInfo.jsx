import styles from "./ContactInfo.module.css"
import React from 'react'

const ContactInfo = () => {
  return (
    <div className={`container
    ${styles.ContactInfo}`}
    >
      <h1>Contact Us</h1>
      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    </div>
  )
}

export default ContactInfo
