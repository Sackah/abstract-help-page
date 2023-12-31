import { useEffect } from "react";

type MobileNavMenuProps = {
    isActive: boolean;
}

const MobileNavMenu = (props: MobileNavMenuProps) => {
    const { isActive } = props;

    useEffect(() => {

        if (isActive) {
          document.documentElement.style.setProperty('--header-background', '#191a1b');
        } else {
          document.documentElement.style.setProperty('--header-background', '#000');
        }
      }, [isActive]);
      

    return ( 
        <div className={`extended-menu ${isActive ? 'active': ''}`}>
            <p>Submit a request</p>
            <p>Sign in</p>
        </div>
     );
}
 
export default MobileNavMenu;