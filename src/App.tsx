import {useState} from 'react';
import './App.css'
import {MainSiteContent} from "./site/Main/MainSiteContent.tsx";
import {Header} from "./site/Header/Header.tsx";
import {Footer} from "./site/Footer/Footer.tsx";
import {Background} from "./site/Background/Background.tsx";

function App() {
  const [viewingSection, setViewingSection] = useState("none");

  return (
      <>
          <div id={"wrapper"}>
              <Header setViewingSection={setViewingSection} />
              <MainSiteContent viewingSection={viewingSection} setViewingSection={setViewingSection} />
              <Footer />
          </div>
          <Background />
      </>
  );
}

export default App
