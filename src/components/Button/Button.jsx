import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ handleClick, text }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  // handleClick: PropTypes.func.isRequired,

  text: PropTypes.string.isRequired,
};
