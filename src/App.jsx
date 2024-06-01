import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseProvider from "./contexts/ExpenseContext";

function App() {
  return (
    <>
      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </>
  );
}

export default App;
