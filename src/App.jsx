import React from "react";
import { Routes, Route } from "react-router-dom";
import useGlobal from "./hooks/useGlobal";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import ProtectedRoutes from "./components/protectedRoutes";
import styles from "./App.module.css";

function App() {
  const { theme } = useGlobal();

  const getStyles = () => {
    return theme === "dark"
      ? `${styles.mainContainer} ${styles.mainContainerDark}`
      : `${styles.mainContainer}`;
  };

  return (
    <div className={getStyles()}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
