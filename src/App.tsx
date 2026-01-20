import './App.css'
import {MainSiteContent} from "./site/Main/MainSiteContent.tsx";
import {Header} from "./site/Header/Header.tsx";
import {Footer} from "./site/Footer/Footer.tsx";
import {Background} from "./site/Background/Background.tsx";

import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import {ServicesArticle} from "./site/Main/articles/Services/Services.Article.tsx";
import {AboutArticle} from "./site/Main/articles/About/About.Article.tsx";
import {PricingArticle} from "./site/Main/articles/Pricing/Pricing.Article.tsx";
import {ContactArticle} from "./site/Main/articles/Contact/Contact.Article.tsx";
import {TermsAndConditionsArticle} from "./site/Main/articles/TermsAndConditions/TermsAndConditions.Article.tsx";

function App() {
  return (
      <>
          <Router>
          <div id={"wrapper"}>
              <Header />
              <Outlet />
              <Footer />
          </div>
          <Background />
              <Routes>
                  <Route path="/" element={<MainSiteContent />} />
                  <Route path="/services" element={<ServicesArticle />} />
                  <Route path="/pricing" element={<PricingArticle />} />
                  <Route path="/contact" element={<ContactArticle />} />
                  <Route path="/about" element={<AboutArticle />} />
                  <Route path="/termsAndConditions" element={<TermsAndConditionsArticle fromContactForm={false} />} />
                  {/*<Route path="/cleaningSuppliesPolicy" element={< />} />*/}
                  {/*Fallback route for 404 errors*/}
                  {/*<Route path="*" element={<NotFound />} />*/}

              </Routes>
          </Router>
      </>
  );
}

export default App
