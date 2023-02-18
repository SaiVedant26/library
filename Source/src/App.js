import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Login from './Pages/Login';

function App() {
  let Page
  switch(window.location.pathname){
    case "/":
      Page=Home
      break
    case "/explore":
      Page=Explore
      break
    case "/login":
      Page=Login
      break
  }
  return (
    <>
      <Navbar/>
      <Page/>
      <Contact/>
    </>
        
  );
}

export default App;
