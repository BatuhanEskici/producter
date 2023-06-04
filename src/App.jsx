import './styles/reset.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageActions from './components/PageActions/PageActions';
import Tasks from './components/Tasks/Tasks';
import { useEffect, useState } from 'react';
import { updateTasks } from './store/tasks';
import { updateColumns } from './store/columns';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tasks = [
      { id: '1', content: 'First task' },
      { id: '2', content: 'Second task' },
      { id: '3', content: 'Third task' },
      { id: '4', content: 'Fourth task' },
      { id: '5', content: 'Fifth task' },
    ];
    const columns = {
      'column-1': {
        name: 'To Do',
        items: tasks,
      },
      'column-2': {
        name: 'Done',
        items: [],
      },
    };

    dispatch(updateColumns(columns));
    dispatch(updateTasks(tasks));
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="container__left-side">
          <Navbar />
        </div>

        <div className="container__right-side bg-lightgray">
          <PageActions />

          {!isLoading && <Tasks />}
        </div>
      </div>
    </div>
  );
}

export default App;
