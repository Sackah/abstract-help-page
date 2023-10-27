import logo from '../assets/logo.svg';
import HeaderButtons from './HeaderComponents/HeaderButtons';


const Header = () => {

    return ( 
        <header id='main'>
            <div>
                <div className="logo-help">
                    <div className="header-logo">
                        <img src={logo} alt="abstract-logo" />
                        <div className="mid-slice"></div>
                        <p>Help Center</p>
                    </div>
                </div>
                <HeaderButtons/>
            </div>
        </header>
     );
}
 
export default Header;
