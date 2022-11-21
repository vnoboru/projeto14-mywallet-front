import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
