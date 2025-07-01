import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomePage from "./routes/Home/HomePage";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to={"/home"} />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
