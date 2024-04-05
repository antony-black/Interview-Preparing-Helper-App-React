import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import styles from "../form.module.css";

export default function Register() {
  const { inputValue, setInputValue, navigate } = useGlobal();

  const handleRegistration = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(inputValue));
    navigate("/login");
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>CREATE AN ACCAUNT</h1>
      <form className={styles.formContainer} onSubmit={handleRegistration}>
        <input
          className={styles.inputField}
          name="name"
          type="text"
          placeholder="Enter username..."
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
        />
        <input
          className={styles.inputField}
          name="email"
          type="email"
          placeholder="Enter email..."
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
        />
        <input
          className={styles.inputField}
          name="password"
          type="password"
          placeholder="Enter password..."
          value={inputValue.password}
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
