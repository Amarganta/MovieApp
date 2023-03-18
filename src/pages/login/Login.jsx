import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../styles/pages/Login.module.css";
import InputBase from "../../components/inputs/InputBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <>
      <AccountCircleIcon sx={{ fontSize: 200 }} className={styles.userIcon} />
      <Box className={styles.login}>
        <Box className={styles.loginBox}>
          <Typography variant="h4" gutterBottom>
            login
          </Typography>
          <Box className={styles.inputBox}>
            <InputBase
              id="login-input-email"
              label="email"
              variant="outlined"
            />
            <InputBase
              id="login-input-pass"
              label="password"
              variant="outlined"
            />
          </Box>
          <Button variant="contained">log in</Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
