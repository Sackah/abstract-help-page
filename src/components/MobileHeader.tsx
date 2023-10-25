import HamburgerMenu from "./HeaderComponents/HamburgerMenu";
import logo from '../assets/logo.svg'
import { HeaderProps } from "./Types";

const MobileHeader = (props: HeaderProps) => {
    const { toggleSearch, toggleMenu, isActive } = props;


    return ( 
        <header>
        <div>
            <div className="logo-help">
                <div className="header-logo">
                    <img src={logo} alt="abstract-logo" />
                    <div className="mid-slice"></div>
                    <p>Help Center</p>
                </div>
            </div>
            <HamburgerMenu toggleSearch={toggleSearch} toggleMenu={toggleMenu} isActive={isActive}/>
        </div>
    </header>
     );
}
 
export default MobileHeader;