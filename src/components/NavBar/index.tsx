import {
  BsArrowUpRight,
  BsFillHeartFill,
  BsHeadphones,
  BsFillTrophyFill,
  BsChevronDown,
  BsXLg,
} from 'react-icons/bs';
import './index.scss';
import { useEffect, useState } from 'react';

type NavbarLink = {
  icon: JSX.Element;
  text: string;
};

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
      icon: <BsArrowUpRight className="navbar-link__icon w-6 h-6" />,
      text: 'trending',
    },
    {
      icon: <BsFillHeartFill className="navbar-link__icon w-6 h-6" />,
      text: 'health',
    },
    {
      icon: <BsHeadphones className="navbar-link__icon w-6 h-6" />,
      text: 'music',
    },
    {
      icon: <BsFillTrophyFill className="navbar-link__icon w-6 h-6" />,
      text: 'reward',
    },
  ];

  const handleClickMenu = (index: number) => {
    setIsActive(index === isActive ? 1 : index);
  };

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  return (
    <header
      className={`header relative z-40 pt-10 ${isOpen ? 'header--open' : ''}`}
    >
      <div className="header-menu h-32 overflow-y-scroll relative">
        <ul className="navbar flex flex-row justify-evenly items-start h-full pt-3 px-2 bg-white absolute">
          {navbarLinks.map((link, index) => (
            <li
              key={link.text}
              className={`navbar-link flex flex-col items-center mx-8 ${
                isActive === index ? 'active' : ''
              }`}
            >
              <button
                type="button"
                className="flex flex-col justify-center items-center"
                onClick={() => handleClickMenu(index)}
              >
                <div className="navbar-link__picture flex justify-center items-center h-14 w-14 overflow-hidden rounded-full">
                  {link.icon}
                </div>
                <h2 className="navbar-link__text uppercase font-bold tracking-wider mt-3">
                  {link.text}
                </h2>
              </button>
            </li>
          ))}
        </ul>

        {isOpen && (
          <button
            type="button"
            className="close-icon fixed z-45 top-10 right-0 p-7"
            onClick={handleToggleMenu}
          >
            <BsXLg className="w-5 h-5" />
          </button>
        )}
      </div>
      <div
        className={`open-icon w-full z-40 absolute bottom-2 ${
          isOpen ? 'hidden' : ''
        }`}
      >
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
