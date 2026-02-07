import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";

export function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}
