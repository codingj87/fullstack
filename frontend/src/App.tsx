import React from "react";
import { Route, Routes } from "react-router-dom";
import PhotoList from "./pages/photo/PhotoList";
import PhotoDetail from "./pages/photo/PhotoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="photolist/:photoId" element={<PhotoDetail />} />
      </Routes>
    </>
  );
}

export default App;
