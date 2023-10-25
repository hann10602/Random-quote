import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-orange-50">
      <div>
        <p className="text-8xl text-orange-200 text-center mt-3 mb-5">todos</p>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/active" element={<TodoApp />} />
          <Route path="/completed" element={<TodoApp />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
