import { BrowserRouter, Route, Routes } from "react-router"
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import ErrorPage from "./pages/ErrorPage"
import Layout from "./components/Layout/Index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/process" element={<Process/>} />
            <Route path="/protfolio" element={<Portfolio/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/services" element={<Service/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
