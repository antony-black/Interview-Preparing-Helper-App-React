import useGlobal from "../../hooks/useGlobal";

export default function Success() {
  const { getProgress } = useGlobal();

  return (
    <div>
      <span>{`Success: ${getProgress}%`}</span>
    </div>
  );
}
