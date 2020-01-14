import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pinShape from '../../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func,
  };

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-4 mb-3">
        <img src={pin.imageUrl} class="card-img-top" alt="..."></img>
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{pin.title}</h5>
          <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
          <Link className="btn btn-danger" to={`/board/${pin.boardId}/pin/${pin.id}/edit`}>Edit</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default Pin;
