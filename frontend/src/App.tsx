import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/post/PostList";
import PostDetail from "./pages/post/PostDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="postList/:postId" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
