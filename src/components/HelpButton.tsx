import icon from '../assets/help-icon.svg'

const HelpButton = () => {
    return (
        <button type='button' className='help-button'>
            <img src={icon} alt="help-icon" />    
            <p>Help</p>
        </button>
    );
}

export default HelpButton;