import React from 'react';

import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

import './PinForm.scss';

class PinForm extends React.Component {
  state = {
    imageURL: '',
    title: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;

    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ imageURL: pin.imageUrl, title: pin.title });
        })
        .catch((error) => console.error('error from get single pin', error));
    }
  }

  pinImageChange = (e) => {
    e.preventDefault();
    this.setState({ imageURL: e.target.value });
  }

  pinTitleChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  editPinEvent = (e) => {
    const { boardId, pinId } = this.props.match.params;
    e.preventDefault();
    const pin = {
      imageUrl: this.state.imageURL,
      title: this.state.title,
      uid: authData.getUid(),
      boardId,
    };
    pinData.editPin(pinId, pin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((error) => console.error('error from save pin', error));
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
    const { pinId } = this.props.match.params;

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
          { pinId
            ? <button className="btn btn-secondary" onClick={this.editPinEvent}>Edit Pin</button>
            : <button className="btn btn-secondary" onClick={this.savePinEvent}>Save Pin</button>
          }
        </form>
    );
  }
}

export default PinForm;
