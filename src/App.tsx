import { Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Movie } from "./routes/Movie";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<Movie></Movie>} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
