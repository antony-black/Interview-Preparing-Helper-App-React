export default function User() {
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <span>{`User name: ${userData.name}`}</span>
    </div>
  );
}
