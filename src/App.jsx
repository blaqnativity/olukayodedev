import Navbar from "./components/Navbar";
import logo from "./assets/img/olkfavicon.ico";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const message = "";

  return (
    <>
      <div class="fixed -z-10 min-h-screen w-full bg-[#fff] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar logo={logo} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog-posts" element={<Blog />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
