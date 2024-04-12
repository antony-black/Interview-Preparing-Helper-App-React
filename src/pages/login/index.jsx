import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import styles from "../form.module.css";

export default function Login() {
  const {
    inputValue,
    setInputValue,
    navigate,
    handleChange,
    setTheme,
    setActiveQuestion,
  } = useGlobal();
  // create a state for "loggedin"
  // useEffect(() => {
  // const previousUserData = JSON.parse(
  //   localStorage.getItem(`${inputValue.email}${inputValue.password}`)
  // );
  // console.log(previousUserData);
  // setTheme(previousUserData.currentTheme);
  // setProgress(previousUserData.currentProgress);
  // },[loggedin])

  const handleUserExist = () => {
    localStorage.setItem("loggedin", true);
    const previousUserData = JSON.parse(
      localStorage.getItem(`${inputValue.email}${inputValue.password}`)
    );
    if (previousUserData) {
      console.log("2", previousUserData);
      setTheme(previousUserData.currentTheme);
      setActiveQuestion(previousUserData.currentQuestion);
    } else {
      setTheme("light");
      setActiveQuestion(0);
    }
    navigate("/");
  };

  const handleUserUnexist = (data) => {
    if (data?.email !== inputValue.email) {
      alert("The user doesn't exist, yet");
    } else {
      alert("Email or password can be wrong. Try again, please.");
    }
  };

  const handleUserData = (data) => {
    if (
      data?.email === inputValue.email &&
      data?.password === inputValue.password
    ) {
      handleUserExist();
    } else {
      handleUserUnexist(data);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem(inputValue.email));
    handleUserData(userData);
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
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          name="password"
          type="password"
          placeholder="Enter password..."
          value={inputValue.password || ""}
          onChange={handleChange}
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
