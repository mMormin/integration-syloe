import {
  BsArrowUpRight,
  BsFillHeartFill,
  BsHeadphones,
  BsFillTrophyFill,
  BsChevronDown,
  BsXLg,
} from 'react-icons/bs';
import './index.scss';
import { useState } from 'react';

interface NavbarLink {
  icon: JSX.Element;
  text: string;
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<number>(1);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks: NavbarLink[] = [
    {
      icon: <img src="https://i.pravatar.cc/300" alt="" />,
      text: 'you',
    },
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
    setIsActive(index === isActive ? 1 : index);
  };

  return (
    <header className="header relative">
      <div className={`header-menu h-40 ${isOpen ? 'active' : ''}`}>
        <ul className="navbar flex flex-row justify-evenly items-center h-full px-5 bg-white absolute">
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

        {isOpen && (
          <button
            type="button"
            className="close-icon absolute z-45 top-2 right-0 p-7"
            onClick={handleToggleMenu}
          >
            <BsXLg className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="open-icon w-full z-40 absolute bottom-2">
        <button
          type="button"
          className="w-full flex justify-center"
          onClick={handleToggleMenu}
        >
          <BsChevronDown />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
