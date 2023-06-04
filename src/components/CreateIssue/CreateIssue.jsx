import './CreateIssue.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 4,
  p: 4,
  outline: 0,
  border: 0,
  borderRadius: '8px',
};

function CreateIssue() {
  return (
    <div>
      <Modal
        open={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="create-issue">
            <label>Name</label>

            <br />

            <input type="text" className="mt-2 bg-gray call-to-action" />

            <div className="create-issue__button">
              <button className="call-to-action bg-gray color-blue">
                Create
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateIssue;
