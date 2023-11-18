import {
  BsArrowUpRight,
  BsFillHeartFill,
  BsHeadphones,
  BsFillTrophyFill,
  BsChevronDown,
} from 'react-icons/bs';
import './index.scss';
import { useState } from 'react';

interface NavbarLink {
  icon: JSX.Element;
  text: string;
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks: NavbarLink[] = [
    {
      icon: <BsArrowUpRight className="navbar-link__icon" />,
      text: 'trending',
    },
    {
      icon: <BsFillHeartFill className="navbar-link__icon" />,
      text: 'health',
    },
    {
      icon: <BsHeadphones className="navbar-link__icon" />,
      text: 'music',
    },
    {
      icon: <BsFillTrophyFill className="navbar-link__icon" />,
      text: 'reward',
    },
  ];

  const handleClickMenu = (index: number) => {
    setIsActive(index === isActive ? null : index);
  };

  return (
    <header className="header ">
      <div className={`header-menu h-40 ${isOpen ? 'active' : ''}`}>
        <ul className="navbar flex flex-row justify-evenly items-center h-full px-10 bg-white absolute">
          {navbarLinks.map((link, index) => (
            <li
              key={link.text}
              className={`navbar-link ${isActive === index ? 'active' : ''}`}
            >
              <button type="button" onClick={() => handleClickMenu(index)}>
                <div className="navbar-link__picture">{link.icon}</div>
                <h2 className="navbar-link__text">{link.text}</h2>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-button w-full z-40 relative">
        <button
          className="w-full flex justify-center"
          onClick={handleToggleMenu}
          type="button"
        >
          <BsChevronDown />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
