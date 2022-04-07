import React from "react";
import LandingPage from "./LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Error from "../components/Error";
import { AnimatePresence } from "framer-motion";

function Pages() {
   const location = useLocation();
   return (
      <AnimatePresence exitBeforeEnter>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cuisine/:type" element={<Cusine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </AnimatePresence>
   );
}

export default Pages;
