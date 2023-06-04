import './Tasks.scss';
import circleHole from '../../assets/icons/circle-hole.svg';
import dashboardYellow from '../../assets/icons/dashboard-yellow.svg';
import chartLevelThree from '../../assets/icons/chart-level-three.svg';
import profilePhoto from '../../assets/images/profile-photo.png';

import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const tasks = [
  { id: '1', content: 'First task' },
  { id: '2', content: 'Second task' },
  { id: '3', content: 'Third task' },
  { id: '4', content: 'Fourth task' },
  { id: '5', content: 'Fifth task' },
];

const taskColumns = {
  'column-1': {
    name: 'Requested',
    items: tasks,
  },
  'column-2': {
    name: 'To do',
    items: [],
  },
  'column-3': {
    name: 'In Progress',
    items: [],
  },
  'column-4': {
    name: 'Done',
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Tasks() {
  const [columns, setColumns] = useState(taskColumns);

  return (
    <section className="tasks">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId} className="tasks__wrapper">
              <div className="tasks__wrapper--header">
                <div className="tasks__wrapper--title">
                  <img
                    src={circleHole}
                    alt="circle with hole"
                    className="mr-2"
                  />

                  <span className="fw-500 color-black">{column.name}</span>
                </div>

                <div className="tasks__wrapper--count">
                  <button className="call-to-action call-to-action-icon bg-gray color-blue">
                    72
                  </button>
                </div>
              </div>

              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="tasks__droppable-area"
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? '#F1F5F9'
                                        : 'white',
                                      margin: '0 0 8px 0',
                                      ...provided.draggableProps.style,
                                    }}
                                    className="tasks__task"
                                  >
                                    <p className="tasks__task--description color-black">
                                      {item.content}
                                    </p>

                                    <div className="tasks__task--infos">
                                      <div className="tasks__task--name">
                                        <img
                                          src={dashboardYellow}
                                          alt="yellow dashboard"
                                          className="call-to-action--icon--extra-small"
                                        />

                                        <span className="ml-1 fw-300">
                                          TSK-01
                                        </span>
                                      </div>

                                      <div className="task--infos__right--side">
                                        <img
                                          src={chartLevelThree}
                                          alt="red chart"
                                        />

                                        <div className="tasks__task--point color-black">
                                          8
                                        </div>

                                        <img src={profilePhoto} alt="profile" />
                                      </div>
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </section>
  );
}

export default Tasks;
