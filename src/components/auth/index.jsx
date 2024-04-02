import useGlobal from "../../hooks/useGlobal";
import Button from "../buttons/button";
import Modal from "../modal";
import styles from "./auth.module.css";

export default function Auth() {
  const { serchValue, setSearchValue, handleLogIn } = useGlobal();
  return (
    <div>
      <Modal>
        <h1 className={styles.title}>Please, log in!</h1>
        <form className={styles.container} onSubmit={handleLogIn}>
          <input
            className={styles.inputField}
            name="user-serching"
            type="text"
            placeholder="Enter username..."
            value={serchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button style={styles.login} onClick={handleLogIn}>
            Log in
          </Button>
        </form>
      </Modal>
    </div>
  );
}
