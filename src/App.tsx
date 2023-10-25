import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HelpButton from './components/HelpButton';
import SearchBar from './components/HeaderComponents/SearchBar';
import MobileNavMenu from './components/MobileNavMenu';


function App() {
  const [ isSearchActive, setSearchActive ] = useState<boolean>(false);
  const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);

  const handleSearchToggle = () =>{
    setSearchActive((prevState)=>!prevState);
  }
  const handleMenuToggle = () => {
    setIsMenuActive((prevState)=>!prevState);
  }

  return (
    <div className="App">
      <Header toggleSearch={handleSearchToggle} toggleMenu={handleMenuToggle} isActive={isMenuActive}/>
      <SearchBar toggleSearch={handleSearchToggle} isSearchActive={isSearchActive}/>
      <MobileNavMenu isActive={isMenuActive}/>
      <HelpButton/>
    </div>
  );
}

export default App;
