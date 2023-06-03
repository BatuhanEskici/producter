import './Navbar.scss';
import home from '../../assets/icons/home.svg';
import chat from '../../assets/icons/chat.svg';
import dashboard from '../../assets/icons/dashboard.svg';
import explore from '../../assets/icons/explore.svg';
import repeat from '../../assets/icons/repeat.svg';
import plus from '../../assets/icons/plus.svg';
import chatAlt from '../../assets/icons/chat-alt.svg';
import bell from '../../assets/icons/bell.svg';
import profilePhoto from '../../assets/images/profile-photo.png';
import companyPhoto from '../../assets/images/company-photo.png';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__items">
          <li className="nav__item">
            <img src={home} alt="dashboard" />
            Dashboard
          </li>
          <li className="nav__item">
            <img src={chat} alt="feedback" />
            Feedback
          </li>
          <li className="nav__item active">
            <img src={dashboard} alt="task" />
            Task
          </li>
          <li className="nav__item">
            <img src={explore} alt="roadmap" />
            Roadmap
          </li>
          <li className="nav__item">
            <img src={repeat} alt="changelog" />
            Changelog
          </li>
        </ul>
      </div>

      <div className="nav__menu nav__menu--second">
        <ul className="nav__items">
          <li className="nav__item">
            <img src={plus} alt="invite people" />
            Invite people
          </li>

          <li className="nav__item">
            <img src={chatAlt} alt="help & Community" />
            Help & Community
          </li>

          <li className="nav__item">
            <img src={bell} alt="notifications" />
            Notifications
          </li>
        </ul>

        <ul>
          <li className="nav__item nav__item--company-info">
            <img src={profilePhoto} alt="profile" />
            Neil Larkins
          </li>

          <li className="nav__item nav__item--company-info">
            <img src={companyPhoto} alt="company" />
            Epodpay Inc.
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
