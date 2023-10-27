import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HelpButton from './components/HelpButton';
import SearchBar from './components/HeaderComponents/SearchBar';
import MobileNavMenu from './components/MobileNavMenu';
import MobileHeader from './components/MobileHeader';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';


function App() {
  const [ isSearchActive, setSearchActive ] = useState<boolean>(false);
  const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);
  const [ isMobile, setIsMobile ] = useState<boolean>(window.innerWidth < 1000);
    
  useEffect(()=>{
      const checkMobile = () => {
          setIsMobile(window.innerWidth < 1000);
      }

      checkMobile();

      window.addEventListener('resize', checkMobile);

      //cleanup function
      return ()=>window.removeEventListener('resize', checkMobile);
  }, [])


  const handleSearchToggle = () =>{
    setSearchActive((prevState)=>!prevState);
  }
  const handleMenuToggle = () => {
    setIsMenuActive((prevState)=>!prevState);
  }

  return (
    <div className="App">
      {!isMobile && <Header/>}
      <SearchBar toggleSearch={handleSearchToggle} isSearchActive={isSearchActive}/>
      {isMobile && <MobileHeader  toggleSearch={handleSearchToggle} toggleMenu={handleMenuToggle} isActive={isMenuActive}/>}
      {isMobile && <MobileNavMenu isActive={isMenuActive}/>}
      <FirstSection/>
      <SecondSection/>
      <Footer/>
      <HelpButton/>
    </div>
  );
}

export default App;
