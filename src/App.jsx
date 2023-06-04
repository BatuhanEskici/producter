import './styles/reset.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageActions from './components/PageActions/PageActions';
import Tasks from './components/Tasks/Tasks';
import { useEffect, useState, createContext } from 'react';
import { updateTasks } from './store/tasks';
import { updateColumns } from './store/columns';
import { useDispatch } from 'react-redux';
import CreateTask from './components/CreateTask/CreateTask';
import { updateCreateTaskModal } from './store/createTaskModal';

export const AppContext = createContext();

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tasks = [
      { id: '1', content: 'First task' },
      { id: '2', content: 'Second task' },
      { id: '3', content: 'Third task' },
      { id: '4', content: 'Fourth task' },
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

  const handleCreateTaskModalAction = (status) => {
    dispatch(updateCreateTaskModal(status));
  };

  const context = { handleCreateTaskModalAction };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Header />

        <div className="container">
          <div className="container__left-side">
            <Navbar />
          </div>

          <div className="container__right-side bg-lightgray">
            <PageActions />

            <CreateTask />

            {!isLoading && <Tasks />}
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
