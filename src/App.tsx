import { Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Movie } from "./routes/Movie";

function App() {
  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<Movie></Movie>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
