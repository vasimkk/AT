import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
       <div className="scroll-smooth">
      <Header />
      <HomePage />
      <Services />
       <About />
      <ContactForm/>
      <Footer />
    </div>
    </>
  );
}

export default App;
