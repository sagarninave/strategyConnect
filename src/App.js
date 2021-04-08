import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Clients from './components/Clients';
import CaseStudy from './components/CaseStudy';
import Xaas from './components/Xaas';
import Freelancer from './pages/auth/Freelancer';
import MainApproach from './components/MainApproach';
import Profile from './pages/Profile';
import CompanyProfile from './pages/CompanyProfile';
import ComingSoon from './pages/ComingSoon';

import NewHome from './components/NewHome';
import NewAbout from './components/NewAbout';
import NewCaseStudy from './components/NewCaseStudy';
import NewClients from './components/NewClients';
import NewContact from './components/NewContact';
import NewProductOffering from './components/NewProductOffering';
import NewBusinessPlanning from './components/NewBusinessPlanning';
import NewFinanceModeling from './components/NewFinanceModeling';
import NewGoToMarketStrategy from './components/NewGoToMarketStrategy';
import NewMarketplaceExpert from './components/NewMarketplaceExpert';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/oldhome" component={Home} />
      <Route path="/oldabout" component={About} />
      <Route path="/oldcontact" component={Contact} />
      <Route path="/oldclient" component={Clients} />
      <Route path="/oldcaseStudy" component={CaseStudy} />
      <Route path="/oldxaas" component={Xaas} />
      <Route path="/approach" component={MainApproach} />
      <Route path="/oldfreelancer" component={Freelancer} />
      <Route path="/oldcompany/profile" component={CompanyProfile} />
      <Route path="/oldcoming-soon" component={ComingSoon} />
      <Route path="/oldprofile" component={Profile} />

      {/* dev route */}
      <Route exact path="/" component={NewHome} />
      <Route path="/about" component={NewAbout} />
      <Route path="/contact" component={NewContact} />
      <Route path="/case-Study" component={NewCaseStudy} />
      <Route path="/client" component={NewClients} />
      <Route path="/product-offering" component={NewProductOffering} />
      <Route path="/business-planning" component={NewBusinessPlanning} />
      <Route path="/finance-modeling" component={NewFinanceModeling} />
      <Route path="/go-to-market-strategy" component={NewGoToMarketStrategy} />
      <Route path="/market-place-expert" component={NewMarketplaceExpert} />
      
    </BrowserRouter>
  );
}

export default App;
