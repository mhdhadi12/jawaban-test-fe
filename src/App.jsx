import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task3 from "./pages/task3";
import Task4 from "./pages/task4";
import Task5 from "./pages/task5";
import Layout from "./pages/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
          <Route path="task5" element={<Task5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
