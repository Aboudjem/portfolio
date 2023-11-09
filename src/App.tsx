import './App.css';

import React, { Suspense, lazy } from 'react';
import Introduction from './components/templates/Introduction';
import Projects from './components/templates/Projects';
import Resume from './components/templates/Resume';
import Services from './components/templates/Services';
import SocialLinks from './components/organisms/SocialLinks';

const CallToAction = lazy(() => import('./components/organisms/CallToAction'));
const Footer = lazy(() => import('./components/organisms/Footer'));

function App() {
  return (
    <div className="App">
      {/* <!-- Blockchain-Description Start --> */}
      <Introduction />
      {/* <!-- Blockchain-Description End --> */}

      {/* <!-- Social Link --> */}
      <SocialLinks />
      {/* <!-- Social Link End --> */}

      {/* <!-- Services --> */}
      <Services />
      {/* <!-- Services End --> */}

      {/* <!-- Resume --> */}
      <Resume />
      {/* <!-- Resume End -->  */}

      {/* <!-- Grid Masonry --> */}
      <Projects />
      {/* <!-- Grid Masonry End --> */}

      {/* <!-- CTA  --> */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <CallToAction />
      </Suspense>

      {/* <!-- Footer --> */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
