import {
  BsArrowUpRight,
  BsFillHeartFill,
  BsHeadphones,
  BsFillTrophyFill,
} from 'react-icons/bs';
import './index.scss';

function NavBar() {
  return (
    <header className="header h-40">
      <ul className="navbar flex flex-row justify-evenly items-center h-full px-10 bg-white">
        <li className="navbar-link">
          <div className="navbar-link__picture">
            <img
              className="messages-header__image"
              alt="profil"
              src="https://i.pravatar.cc/300"
            />
          </div>
          <h2 className="navbar-link__text">you</h2>
        </li>
        <li className="navbar-link">
          <div className="navbar-link__picture">
            <BsArrowUpRight />
          </div>
          <h2 className="navbar-link__text">trending</h2>
        </li>
        <li className="navbar-link">
          <div className="navbar-link__picture">
            <BsFillHeartFill />
          </div>
          <h2 className="navbar-link__text">health</h2>
        </li>
        <li className="navbar-link">
          <div className="navbar-link__picture">
            <BsHeadphones />
          </div>
          <h2 className="navbar-link__text">music</h2>
        </li>
        <li className="navbar-link">
          <div className="navbar-link__picture">
            <BsFillTrophyFill />
          </div>
          <h2 className="navbar-link__text">reward</h2>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
