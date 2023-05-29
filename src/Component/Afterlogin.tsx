import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";
const Afterlogin = () => {
  return (
    <div>
           {" "}
      <BrowserRouter>
               {" "}
        <Routes>
                   {" "}
          <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blog />} />
                        <Route path="contact/:id" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />         {" "}
          </Route>
                 {" "}
        </Routes>
             {" "}
      </BrowserRouter>
         {" "}
    </div>
  );
};
export default Afterlogin;
