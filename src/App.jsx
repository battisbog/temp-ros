import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./routers/routers";

function App() {
  return (
    <Suspense fallback="Loading.........................">
      <RouterProvider router={routers} />
    </Suspense>
  );
}

export default App;
