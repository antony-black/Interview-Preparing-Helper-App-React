import useGlobal from "../../hooks/useGlobal";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

export default function Modal({ children }) {
  const { user } = useGlobal();
  const modal = useRef();

  useEffect(() => {
    if (user) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [user]);

  return createPortal(
    <dialog ref={modal} className={styles.modalPopup} open>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
