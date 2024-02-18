import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { Contact } from "./layout/section/contact/Contact";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
