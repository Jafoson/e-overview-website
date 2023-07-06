import React from "react";
import "./Nav_Bar_Authenfication.scss";
import TextButton from "../../Buttons";
import { useNavigate } from "react-router-dom";

export default function Nav_Bar_Authentication() {
  const navigate = useNavigate();

  return (
    <div className="Nav_Bar_Authentication_container">
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
