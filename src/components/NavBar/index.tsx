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
  // To manage menu open/close and active navbar link
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<number | null>(1);

  const createNavbarLink = (icon: JSX.Element, text: string): NavbarLinkT => ({
    icon,
    text,
  });

  // Function to add the classes to the icons
  const addClasses = (icon: JSX.Element) => {
    const iconWithClasses = React.cloneElement(icon, {
      className: `w-6 h-6 text-greyvariant react-icons navbar-link__icon`,
    });
    return iconWithClasses;
  };

  // Array to associate the wanted icon and text
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

  // To manage body overflow based on menu open/close
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  // Clicks handlders
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickMenu = (index: number) => {
    setIsActive(index === isActive ? null : index);
  };

  return (
    <header
      className={`relative z-40 pt-9 md:pt-0 md:h-20 md:w-full shadow-none md:shadow ${
        isOpen ? 'header--open' : 'header'
      }`}
    >
      <div className="header-menu h-header overflow-y-scroll relative md:h-full md:overflow-y-hidden md:flex md:justify-end md:bg-white">
        {/* Narbar */}
        <ul className="navbar flex flex-row justify-evenly items-center h-full px-12 bg-white absolute rounded-custom md:p-3 w-header md:w-auto">
          {navbarLinks.map((link, index) => (
            <li
              key={link.text}
              className={`navbar-link flex flex-col items-center mx-5 relative ${
                isActive === index ? 'active' : ''
              }`}
            >
              {/* Notifications count */}
              {index === 0 && (
                <div
                  className={`notifications absolute z-20 text-xxs px-2 py-1.5 rounded-full -top-1 -right-2.5 text-white md:-left-3 md:-top-2 md:right-inherit ${
                    isActive === 0 ? 'bg-pink' : 'bg-greyvariant'
                  }`}
                >
                  12
                </div>
              )}

              {/* Navbar Link */}
              <a
                href={`#${link.text}`}
                className="flex flex-col justify-center items-center md:flex-row relative text-grey hover:text-pink"
                onClick={() => handleClickMenu(index)}
              >
                <div className="navbar-link__image flex justify-center items-center h-14 w-14 overflow-hidden rounded-full border-2 border-lightgrey md:hidden md:h-9 md:w-9 md:mr-4">
                  {link.icon}
                </div>
                <h2 className="navbar-link__text uppercase mt-1.5 text-header md:mt-0 md:relative text-grey">
                  {link.text}
                </h2>
              </a>
            </li>
          ))}
        </ul>

        {/* Cross Arrow */}
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

      {/* Down Arrow */}
      <div
        className={`w-full z-40 absolute bottom-2 md:hidden ${
          isOpen ? 'hidden' : 'open-icon'
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
