import './Header.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import controls from '../../assets/icons/controls.svg';
import filter from '../../assets/icons/filter.svg';
import plus from '../../assets/icons/plus.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="contaner__left-side">
          <div className="header__logo-wrapper">
            <img src={logo} alt="logo" className="header__logo" />
          </div>
        </div>

        <div className="container__right-side">
          <div className="header__items">
            <div className="header__filters">
              <div className="header__search call-to-action bg-gray">
                <img src={search} alt="search" className="icon" />

                <input
                  type="text"
                  placeholder="Search"
                  className="header__search-input"
                />
              </div>

              <div className="header__controls">
                <button className="call-to-action bg-gray">
                  <img src={controls} alt="controls" className="icon" />
                </button>
              </div>

              <div className="header__filter">
                <button className="call-to-action bg-gray">
                  <img src={filter} alt="filter" className="icon" />
                </button>
              </div>
            </div>

            <div className="header__add-task">
              <button className="call-to-action border-blue">
                <img src={plus} alt="plus" className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;