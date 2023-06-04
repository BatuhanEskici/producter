import './PageActions.scss';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import sandWatch from '../../assets/icons/sand-watch.svg';
import peopleBlue from '../../assets/icons/people-blue.svg';
import calendarRed from '../../assets/icons/calendar-red.svg';
import people from '../../assets/icons/people.svg';
import dashboard from '../../assets/icons/dashboard.svg';
import chart from '../../assets/icons/chart.svg';

function PageActions() {
  return (
    <section className="page-actions">
      <div className="page-actions__left-side">
        <button className="mr-3">
          <img src={ArrowLeft} alt="arrow left" />
        </button>

        <div className="page-actions__item page-actions__item--with-border fw-300">
          <img src={sandWatch} alt="sand watch" />
          SPR-06
        </div>

        <div className="page-actions__item page-actions__item--with-border fw-300">
          <img src={peopleBlue} alt="people" />
          TEAM-10
        </div>

        <div className="page-actions__item page-actions__item--with-border color-black fw-500">
          New Sprint Name
        </div>

        <div className="page-actions__item ml-1">
          <img src={calendarRed} alt="calendar" />
        </div>

        <div className="page-actions__item ml-3">
          <img src={people} alt="people" />
        </div>

        <div className="page-actions__item">
          <button className="call-to-action call-to-action--padding-x-12 bg-gray color-blue fw-500 ml-3">
            Complete Sprint
          </button>
        </div>
      </div>

      <div className="page-actions__right-side">
        <div className="page-actions__item page-actions__item--with-border">
          <button className="call-to-action call-to-action--icon call-to-action--icon--smaller bg-gray">
            <img src={dashboard} alt="dashboard" />
          </button>
        </div>

        <div className="page-actions__item">
          <button className="call-to-action call-to-action--icon call-to-action--icon--smaller bg-blue">
            <img src={chart} alt="chart" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageActions;
