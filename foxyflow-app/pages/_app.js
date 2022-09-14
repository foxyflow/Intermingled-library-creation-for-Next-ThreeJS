//_app is Next version of Globals 
import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {

  const userData = useUserData();
  
return (
  
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster /> {/* Invisable -- now choose your page for toast */}
    </UserContext.Provider> 
    
  
);
}

export default MyApp;

//Hey Jeff, foxyflow from NZ here, you've really helped solidify 
// which parts of the Firebase and Nextjs documentation to focus on.
// My eyes are less burntout. Also, I appreicate the perfected dark theme contrasting in fireship.
