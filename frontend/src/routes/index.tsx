import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "../pages/Post/PostList";
import PostDetail from "../pages/Post/PostDetail";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="postList/:postId" element={<PostDetail />} />
      </Routes>
    </>
  );
}
