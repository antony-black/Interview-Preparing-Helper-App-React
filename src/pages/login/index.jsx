import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import styles from "../form.module.css";

export default function Login() {
  const { inputValue, setInputValue, navigate } = useGlobal();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(inputValue.email));
    // const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);
    if (
      userData.email === inputValue.email &&
      userData.password === inputValue.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
      setInputValue("");
    } else {
      alert("Email or password can be wrong. Try again, please.");
    }
  };

  const handleSwitchingToRegister = () => {
    setInputValue(...inputValue, { name: "", email: "", password: "" });
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>LOGIN, PLEASE!</h1>
      <form className={styles.formContainer} onSubmit={handleLogin}>
        <input
          className={styles.inputField}
          name="email"
          type="text"
          required
          placeholder="Enter email..."
          value={inputValue.email || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
        />
        <input
          className={styles.inputField}
          name="password"
          type="password"
          placeholder="Enter password..."
          value={inputValue.password || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
        />
        <button type="submit" className={styles.formBtn}>
          LOGIN
        </button>
      </form>
      <div>
        <h3 className={styles.linkLabel}>Don't have an account?</h3>
        <Link to={"/register"} onClick={handleSwitchingToRegister}>
          <u>Register here</u>
        </Link>
      </div>
    </div>
  );
}
