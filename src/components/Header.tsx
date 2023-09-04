import '@styles/header.style.css';
import Paragraph from './atoms/Paragraph';

const Header = () => {
  return <header className='header'>
    <Paragraph value={'Piedra, Papel o tijera'} center title />
  </header>;
};

export default Header;
