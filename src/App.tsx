import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HelpButton from './components/HelpButton';
import SearchBar from './components/HeaderComponents/SearchBar';
import MobileNavMenu from './components/MobileNavMenu';


function App() {
  const [ searchToggle, setSearchToggle ] = useState<boolean>(false);
  const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);

  const handleSearchToggle = () =>{
    setSearchToggle((prevState)=>!prevState);
  }
  const handleMenuToggle = () => {
    setIsMenuActive((prevState)=>!prevState);
  }

  return (
    <div className="App">
      {!searchToggle && <Header toggleSearch={handleSearchToggle} toggleMenu={handleMenuToggle} isActive={isMenuActive}/>}
      {searchToggle && <SearchBar toggleSearch={handleSearchToggle}/>}
      <MobileNavMenu isActive={isMenuActive}/>
      <HelpButton/>
    </div>
  );
}

export default App;
