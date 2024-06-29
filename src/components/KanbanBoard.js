import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: '1',
      title: 'To Do',
      cards: [
        { id: 'Card1', title: 'Card 1', description: 'Card 1 description' },
        { id: 'Card2', title: 'Card 2', description: 'Card 2 description' },
      ],
    },
    {
      id: '2',
      title: 'In Progress',
      cards: [
        { id: 'Card3', title: 'Card 3', description: 'Card 3 description' },
      ],
    },
    {
      id: '3',
      title: 'Done',
      cards: [
        { id: 'Card4', title: 'Card 4', description: 'Card 4 description' },
      ],
    },
  ],
};

const KanbanBoard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Kanban Board</h2>
      <Board data={data} draggable />
    </div>
  );
};

export default KanbanBoard;
