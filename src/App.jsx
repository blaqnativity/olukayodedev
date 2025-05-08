import Navbar from "./components/Navbar";
import logo from "./assets/img/olkfavicon.ico";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Stack from "./components/Stack";
import Resume from "./components/Resume";

const App = () => {
  const message = "";

  return (
    <>
      <div class="fixed -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar logo={logo} />
      <Hero />
      <Stack />
      <Resume />
      <CTA />
      <ContactForm />
      <Footer logo={logo} />
    </>
  );
};

export default App;
