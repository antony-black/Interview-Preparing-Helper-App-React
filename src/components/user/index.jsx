import useGlobal from "../../hooks/useGlobal";

export default function User() {
  const { inputValue } = useGlobal();
  const userData = JSON.parse(localStorage.getItem(inputValue.email));
  return (
    <div>
      <span>{`User name: ${userData?.name}`}</span>
    </div>
  );
}
