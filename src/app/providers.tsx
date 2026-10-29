import { Outlet } from "react-router-dom";
import { Signature } from "../components/layout/Signature";

export function Providers() {
  return <><Outlet /><Signature /></>;
}
