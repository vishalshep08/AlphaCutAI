import Menubar from './components/Menubar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserSyncHandler from './components/UserSyncHandler.jsx';
import { RedirectToSignIn } from '@clerk/clerk-react';
import Result from './pages/Result.jsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import BuyCredits from './pages/BuyCredits.jsx';
import AboutUs from './pages/AboutUs.jsx';
import LegalPages from './pages/LegalPages.jsx';
import TryNow from './components/TryNow.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <div>
      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<BuyCredits />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/legalpages" element={<LegalPages />} />
        <Route path="/header" element={<Header />} />
        <Route path="/trynow" element={
          <>
            <SignedIn>
              <TryNow />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        />
        <Route path="/result" element={
          <>
            <SignedIn>
              <Result />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        />

      </Routes>
      <Footer />
    </div >
  );
};

export default App;
