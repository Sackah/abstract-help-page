type HamburgerMenuProps = {
    toggleSearch: ()=>void;
    toggleMenu: ()=>void;
    isActive: boolean;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
    const { toggleSearch, toggleMenu, isActive } = props;


    return ( 
        <div className="hamburger-menu">
            <i className="fa-solid fa-magnifying-glass" onClick={toggleSearch}></i>
            <div className={`menu-icon ${isActive ? 'active': ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
     );
}
 
export default HamburgerMenu;