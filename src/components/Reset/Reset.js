import React from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./Reset.module.css";
import { Form } from "react-bootstrap";

const Reset = () => {
    const navigate = useNavigate();
    
      const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;

    sendPasswordResetEmail(auth,emalVal ).then(async (res) => {
        alert("Check your gmail")
        navigate("/login");
      })
      .catch((err) => {
        alert(err.code)
      });
      }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading} style={{color:"black"}}>Reset Password</h1>

        <Form onSubmit={(e)=>handleSubmit(e)}>
        <label>Email</label> <br /><br />
        <input name="email"  placeholder="Write your registered email" />
       
    
        <div className={styles.footer} style={{marginTop: "5px"}}>
          <button >
            Reset Password
          </button>
         
        </div>
        </Form>
      </div>
    </div>
  )
}

export default Reset
