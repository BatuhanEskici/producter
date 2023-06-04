import './Header.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import controls from '../../assets/icons/controls.svg';
import filter from '../../assets/icons/filter.svg';
import plusBlue from '../../assets/icons/plus-blue.svg';
import { useContext } from 'react';
import { AppContext } from '../../App';

function Header() {
  const context = useContext(AppContext);

  return (
    <header className="header">
      <div className="container">
        <div className="container__left-side">
          <div className="header__logo-wrapper">
            <img src={logo} alt="logo" className="header__logo" />
          </div>
        </div>

        <div className="container__right-side">
          <div className="header__items">
            <div className="header__filters">
              <div className="header__search call-to-action bg-gray">
                <img src={search} alt="search" />

                <input
                  type="text"
                  placeholder="Search"
                  className="header__search-input"
                />
              </div>

              <div className="header__controls ml-2">
                <button className="call-to-action call-to-action--icon bg-gray">
                  <img src={controls} alt="controls" className="icon" />
                </button>
              </div>

              <div className="header__filter ml-2">
                <button className="call-to-action call-to-action--icon bg-gray">
                  <img
                    src={filter}
                    alt="filter"
                    className="icon"
                    style={{ width: '75%', height: '75%' }}
                  />
                </button>
              </div>
            </div>

            <div className="header__add-task">
              <button
                className="call-to-action border-blue"
                onClick={() => {
                  context.handleCreateTaskModalAction(true);
                }}
              >
                <img src={plusBlue} alt="plus" className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
