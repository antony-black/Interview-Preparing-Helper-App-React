import useGlobal from "../../hooks/useGlobal";

export default function Auth() {
  const { serchValue, setSearchValue, user, setUser } = useGlobal();
  return (
    <div>
      <input
        name="user-serching"
        type="text"
        placeholder="Enter username..."
        value={serchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={() => setUser(serchValue)}>Login</button>
    </div>
  );
}
