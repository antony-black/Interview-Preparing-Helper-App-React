import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import { ValidationService } from "../../services/validation.service";
import styles from "../form.module.css";

export default function Register() {
  const { inputValue, setInputValue, navigate, handleChange } = useGlobal();

  const handleRegistration = () => {
    navigate("/login");
    localStorage.setItem(inputValue.email, JSON.stringify(inputValue));
    setInputValue("");
  };

  const processRegistration = () => {
    if (ValidationService.isValid(inputValue)) {
      handleRegistration();
    } else {
      return;
    }
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    processRegistration();
  };

  // const handleChange = (e) => {
  //   setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  // };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>CREATE AN ACCAUNT</h1>
      <form className={styles.formContainer} onSubmit={submitRegistration}>
        <input
          className={styles.inputField}
          name="name"
          type="text"
          required
          placeholder="Enter username..."
          value={inputValue.name || ""}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          name="email"
          type="email"
          required
          placeholder="Enter email..."
          value={inputValue.email || ""}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          name="password"
          type="password"
          required
          placeholder="Enter password..."
          value={inputValue.password || ""}
          onChange={handleChange}
        />

        <button type="submit" className={styles.formBtn}>
          REGISTER
        </button>
      </form>
      <div>
        <h3 className={styles.linkLabel}>Have already an account?</h3>
        <Link to={"/login"}>
          <u>Login here</u>
        </Link>
      </div>
    </div>
  );
}
