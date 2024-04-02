import useGlobal from "../../hooks/useGlobal";

export default function User() {
  const { user } = useGlobal();
  return (
    <div>
      <span>{`User name: ${user}`}</span>
    </div>
  );
}
