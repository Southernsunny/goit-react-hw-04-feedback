import PropTypes from 'prop-types';
import { BtnBox, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map(option => {
        return (
          <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        );
      })}
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
