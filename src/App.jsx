import Navbar from "./components/Navbar";
import logo from "./assets/img/olkfavicon.ico";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import heroImg from "./assets/img/kay.png";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

const App = () => {
  const titleOne = " A Passionate";
  const titleTwo = " Software Developer";
  const message =
    "I’m Olukayode Kay, a passionate Software Developer with expertise in React.js, Vue.js, & modern web technologies. I specialize in building user-friendly applications that solve real-world problems. With a deep understanding of frontend development, state management, and API integration, I can bring your ideas to life";

  return (
    <>
      <Navbar logo={logo} />
      <Hero
        titleOne={titleOne}
        titleTwo={titleTwo}
        message={message}
        heroImg={heroImg}
      />
      <Stack />
      <CTA />
      <ContactForm />
      <Footer logo={logo} />
    </>
  );
};

export default App;
