import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import { ValidationService } from "../../services/validation.service";
import styles from "../form.module.css";

export default function Register() {
  const { inputValue, setInputValue, navigate } = useGlobal();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (ValidationService.isValid(inputValue)) {
      navigate("/login");
    } else {
      return;
    }
    localStorage.setItem("user", JSON.stringify(inputValue));
    setInputValue("");
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>CREATE AN ACCAUNT</h1>
      <form className={styles.formContainer} onSubmit={handleRegistration}>
        <input
          className={styles.inputField}
          name="name"
          type="text"
          required
          placeholder="Enter username..."
          value={inputValue.name || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
        />
        <input
          className={styles.inputField}
          name="email"
          type="email"
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
          required
          placeholder="Enter password..."
          value={inputValue.password || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
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
