import React, { useEffect, useState } from 'react';
import {
  BsArrowUpRight,
  BsFillHeartFill,
  BsHeadphones,
  BsFillTrophyFill,
  BsChevronDown,
  BsXLg,
} from 'react-icons/bs';
import { NavbarLinkT } from '../../@types';
import './index.scss';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<number>(1);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const createNavbarLink = (icon: JSX.Element, text: string): NavbarLinkT => ({
    icon,
    text,
  });

  const addClasses = (icon: JSX.Element) => {
    const iconWithClasses = React.cloneElement(icon, {
      className: `w-6 h-6 text-grey react-icons navbar-link__icon`,
    });
    return iconWithClasses;
  };

  const navbarLinks: NavbarLinkT[] = [
    createNavbarLink(
      <img src="https://i.pravatar.cc/300" alt="profil" />,
      'you'
    ),
    createNavbarLink(addClasses(<BsArrowUpRight />), 'trending'),
    createNavbarLink(addClasses(<BsFillHeartFill />), 'health'),
    createNavbarLink(addClasses(<BsHeadphones />), 'music'),
    createNavbarLink(addClasses(<BsFillTrophyFill />), 'reward'),
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
      className={`header relative z-40 pt-9 md:pt-0 md:h-20 md:w-full shadow ${
        isOpen ? 'header--open' : ''
      }`}
    >
      <div className="header-menu h-header overflow-y-scroll relative md:h-full md:overflow-y-hidden md:flex md:justify-end md:bg-white">
        <ul className="navbar flex flex-row justify-evenly items-center h-full px-12 bg-white absolute rounded-custom md:p-3">
          {navbarLinks.map((link, index) => (
            <li
              key={link.text}
              className={`navbar-link flex flex-col items-center mx-5 ${
                isActive === index ? 'active' : ''
              }`}
            >
              <a
                href={`#${link.text}`}
                className="flex flex-col justify-center items-center md:flex-row relative text-grey hover:text-pink"
                onClick={() => handleClickMenu(index)}
              >
                <div className="navbar-link__image flex justify-center items-center h-14 w-14 overflow-hidden rounded-full border-2 border-lightgrey md:hidden md:h-9 md:w-9 md:mr-4">
                  {link.icon}
                </div>
                <h2 className="navbar-link__text uppercase mt-1.5 text-header md:mt-0 md:relative">
                  {link.text}
                </h2>
              </a>
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
        className={`open-icon w-full z-40 absolute bottom-2 md:hidden ${
          isOpen ? 'hidden' : ''
        }`}
      >
        <button
          type="button"
          className="w-full flex justify-center"
          onClick={handleToggleMenu}
        >
          <BsChevronDown className="text-grey" />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
