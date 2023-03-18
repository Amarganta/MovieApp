import React from "react";
import styles from "../../styles/pages/Login.module.css";
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
