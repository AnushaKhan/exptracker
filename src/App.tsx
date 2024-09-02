import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <div className="sidebar"></div>
        <div>
          <header> </header>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<>Hello</>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
