import React from 'react';

import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

import './PinForm.scss';

class PinForm extends React.Component {
  state = {
    imageURL: '',
    title: '',
  }

  pinImageChange = (e) => {
    e.preventDefault();
    this.setState({ imageURL: e.target.value });
  }

  pinTitleChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  savePinEvent = (e) => {
    const { boardId } = this.props.match.params;
    e.preventDefault();
    const newPin = {
      imageUrl: this.state.imageURL,
      title: this.state.title,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((error) => console.error('error from save pin', error));
  }

  render() {
    const { imageURL, title } = this.state;

    return (
        <form className="PinForm">
          <div className="form-group">
            <label htmlFor="pin-image">Pin Image</label>
            <input
              type="text"
              className="form-group"
              id="pin-image"
              placeholder="Enter image url"
              value={imageURL}
              onChange={this.pinImageChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="pin-title">Pin Title</label>
            <input
              type="text"
              className="form-group"
              id="pin-title"
              placeholder="Enter pin title"
              value={title}
              onChange={this.pinTitleChange}
            ></input>
          </div>
          <button className="btn btn-secondary" onClick={this.savePinEvent}>Save Pin</button>
        </form>
    );
  }
}

export default PinForm;
