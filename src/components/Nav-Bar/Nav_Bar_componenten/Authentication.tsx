import React from "react";
import TextButton from "../../Buttons";
import { useNavigate } from "react-router-dom";

import styles from "./Authenfication.module.scss";

export default function Nav_Bar_Authentication() {
  const navigate = useNavigate();

  return (
    <div className={styles.Nav_Bar_Authentication_container}>
      <TextButton
        style={{ marginRight: 8 }}
        onClick={() => {
          navigate("/signin");
        }}
        content="Login"
        primary={false}
      />
      <TextButton
        style={{ marginLeft: 8 }}
        onClick={() => {
          navigate("/signup");
        }}
        content="Register"
      />
    </div>
  );
}
