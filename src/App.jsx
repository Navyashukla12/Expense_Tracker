import React from "react";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./componets/Work.jsx";
import NotFound from "./componets/NotFound.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
