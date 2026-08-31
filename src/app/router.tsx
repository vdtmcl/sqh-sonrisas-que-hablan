import { createBrowserRouter } from "react-router-dom";
import { Providers } from "./providers";
import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { NotFound } from "../pages/NotFound";
import { EpisodeRoute } from "../pages/EpisodeRoute";

export const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/episodios/:slug", element: <EpisodeRoute /> },
      { path: "/preview", element: <Preview /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);
