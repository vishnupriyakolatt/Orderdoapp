import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
<Toaster position="top-center" toastOptions={{ duration: 2000 }} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
