import './styles/reset.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="container__left-side">
          <Navbar />
        </div>

        <div className="container__right-side"></div>
      </div>
    </div>
  );
}

export default App;
