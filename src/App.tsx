import './App.css';

import { Suspense, lazy } from 'react';
import Introduction from './components/templates/Introduction';
import Resume from './components/templates/Resume';
import Services from './components/templates/Services';
import SocialLinks from './components/organisms/SocialLinks';

const Projects = lazy(() => import('./components/templates/Projects'));
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
      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>
      {/* <!-- Grid Masonry End --> */}

      {/* <!-- CTA  --> */}
      <Suspense fallback={<div>Loading CTA...</div>}>
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
