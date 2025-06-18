import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
// import { AppContext } from './context/AppContext.jsx';
import AppContextProvider from './context/AppContext.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not defined. Please set it in your .env file.");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);
