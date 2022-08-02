import { Component } from 'react';
import PropTypes from 'prop-types';

// import { Button } from '../Button/Button';
import { ModalStyled, Overlay } from './Modal.styled.js';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }
  onEsc = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  onBackground = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { imageLargeModal, closeModal } = this.props;
    return (
      <Overlay onClick={this.onBackground}>
        <ModalStyled>
          <img src={imageLargeModal} alt="" />
          {/* <Button text="Close" handleClick={closeModal} /> */}
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  imageLargeModal: PropTypes.string.isRequired
}
