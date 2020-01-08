import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
static propTypes = {
  board: boardShape.boardShape,
  deleteBoard: PropTypes.func,
}

deleteBoardEvent = (e) => {
  e.preventDefault();
  const { deleteBoard, board } = this.props;
  deleteBoard(board.id);
}

render() {
  const { board } = this.props;

  return (
    <div className="Board col-4 mb-3">
      <div class="card">
        <div class="card-body">
          <button className="btn btn-danger" onClick={this.deleteBoardEvent}>X</button>
          <h5 class="card-title">{board.name}</h5>
          <p class="card-text">{board.description}</p>
          <Link className="btn btn-primary" to={`/board/${board.id}`}>View Board</Link>
        </div>
      </div>
    </div>
  );
}
}

export default Board;
