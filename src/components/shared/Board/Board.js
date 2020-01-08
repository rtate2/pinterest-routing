import React from 'react';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
static propTypes = {
  board: boardShape.boardShape,
}

render() {
  const { board } = this.props;

  return (
    <div className="Board">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{board.name}</h5>
          <p class="card-text">{board.description}</p>
        </div>
      </div>
    </div>
  );
}
}

export default Board;
