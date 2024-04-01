import { useContext } from "react";
import { GlobalContext } from "../context";

export default function useGlobal() {
  return useContext(GlobalContext);
}
