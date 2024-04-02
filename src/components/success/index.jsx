import useGlobal from "../../hooks/useGlobal";

export default function Success() {
  const { progress } = useGlobal();

  return (
    <div>
      <span>{`Success: ${progress}%`}</span>
    </div>
  );
}
