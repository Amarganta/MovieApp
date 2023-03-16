import React from "react";
import styles from "../styles/routes/Login.module.css";
import userIcon from "../../public/user-286-512.png";
const Login = () => {
  return (
    <div className={styles.container}>
      <h2>Log in</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <button>Log in</button>
    </div>
  );
};

export default Login;
