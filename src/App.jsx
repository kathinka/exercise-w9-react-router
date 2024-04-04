import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import { NavBarLink } from "./components/NavBarLink";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarLink />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
