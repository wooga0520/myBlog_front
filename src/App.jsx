import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import router from "./router/router";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
