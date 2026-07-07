import { Outlet } from "react-router-dom";
import { AnalyticsRouteTracker } from "../components/analytics/AnalyticsRouteTracker";

export function Providers() {
  return (
    <>
      <AnalyticsRouteTracker />
      <Outlet />
    </>
  );
}
