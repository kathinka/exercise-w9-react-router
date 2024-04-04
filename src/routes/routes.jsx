import { Route } from "react-router-dom";
import Home from "../pages/Home";
import SongInfo from "../pages/SongInfo";
import { NotFoundPage } from "../pages/NotFoundPage";


const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* Define your dynamic route here below */}
    <Route path="/song/:songTitle" element={<SongInfo />} />
    <Route path="*" element={<NotFoundPage />} />

  </>
);

export default routes;
