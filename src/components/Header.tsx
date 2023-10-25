import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import HeaderButtons from './HeaderComponents/HeaderButtons';
import HamburgerMenu from './HeaderComponents/HamburgerMenu';

type HeaderProps = {
    toggleSearch: ()=>void;
    toggleMenu: ()=>void;
    isActive: boolean;
}

const Header = (props: HeaderProps) => {
    const [ isMobile, setIsMobile ] = useState<boolean>(false);
    const { toggleSearch, toggleMenu, isActive } = props;

    useEffect(()=>{
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1000);
        }

        checkMobile();

        window.addEventListener('resize', checkMobile);

        //cleanup function
        return ()=>window.removeEventListener('resize', checkMobile);
    }, [])

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
                {!isMobile && <HeaderButtons/>}
                {isMobile && <HamburgerMenu toggleSearch={toggleSearch} toggleMenu={toggleMenu} isActive={isActive}/>}
            </div>
        </header>
     );
}
 
export default Header;
