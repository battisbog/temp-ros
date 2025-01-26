import PublicLayout from "@/layout/PublicLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoute";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback="fallback --------------">
        <PublicLayout />
      </Suspense>
    ),
    children: [...publicRoutes],
  },
]);

export default routers;
