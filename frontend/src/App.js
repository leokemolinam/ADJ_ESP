import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimelineProcess from "./components/TimelineProcess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimelineProcess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
