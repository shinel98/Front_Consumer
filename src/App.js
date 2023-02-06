import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/*여기에 route 추가 하면 됩니다 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  // return <h1>hello </h1>;
}

export default App;
