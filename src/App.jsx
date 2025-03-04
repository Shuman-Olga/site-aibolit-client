import { RouterProvider } from "react-router-dom";

import routes from "./routers/routers";

export default function App() {
  return <RouterProvider router={routes} />;
}
