import './styles/reset.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageActions from './components/PageActions/PageActions';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="container__left-side">
          <Navbar />
        </div>

        <div className="container__right-side">
          <PageActions />
        </div>
      </div>
    </div>
  );
}

export default App;
