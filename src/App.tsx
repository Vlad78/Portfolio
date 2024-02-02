import "./App.css";
import styled from "styled-components";
import Header from "./layout/header/Header";
import Main from "./layout/section/main/Main";
import Skills from "./layout/section/skills/Skills";
import Works from "./layout/section/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
