import {useState} from 'react';
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {MainSiteContent} from "./components/site/Main/MainSiteContent.tsx";
import {Header} from "./components/site/Header/Header.tsx";
import {Footer} from "./components/site/Footer/Footer.tsx";
import {Background} from "./components/site/Background/Background.tsx";

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
