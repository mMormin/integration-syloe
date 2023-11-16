import NavBar from './NavBar';
import StatusBar from './StatusBar';
import './index.scss';

function Header() {
  return (
    <header className="header">
      <StatusBar />
      <NavBar />
    </header>
  );
}

export default Header;
