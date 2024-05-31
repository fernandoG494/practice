import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/ErrorPage";

import Element1 from "../pages/Element1";
import Element2 from "../pages/Element2";
import Element3 from "../pages/Element3";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/element-1" element={<Element1 />} />
        <Route path="/element-2" element={<Element2 />} />
        <Route path="/element-3" element={<Element3 />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
