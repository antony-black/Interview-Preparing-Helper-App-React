import useGlobal from "../../hooks/useGlobal";

export default function User() {
  const { user, setUser } = useGlobal();
  return (
    <div>
      <span>{`User name: ${user}`}</span>
    </div>
  );
}
