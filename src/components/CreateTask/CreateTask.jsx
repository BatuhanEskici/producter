import './CreateTask.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { v4 as uuid } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  bgcolor: 'background.paper',
  boxShadow: 4,
  p: 4,
  outline: 0,
  border: 0,
  borderRadius: '8px',
};

function CreateTask() {
  const isActive = useSelector((state) => state.createTaskModal);
  const context = useContext(AppContext);
  const [name, setName] = useState('');

  return (
    <div>
      <Modal
        open={isActive}
        onClose={() => {
          context.handleCreateTaskModalAction(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="create-issue">
            <label>Name</label>

            <br />

            <input
              type="text"
              className="mt-2 bg-gray call-to-action"
              onInput={(event) => {
                setName(event.target.value);
              }}
            />

            <div className="create-issue__button-wrapper mt-4">
              <button
                className="call-to-action bg-gray color-blue"
                onClick={() => {
                  context.addTaskToTheTaskList({
                    id: `${uuid()}`,
                    content: name,
                  });
                }}
              >
                Create
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateTask;
