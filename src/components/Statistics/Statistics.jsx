import PropTypes from 'prop-types';
import { StatList, Item, Feedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <Item>
        <Feedback>Good: {good}</Feedback>
      </Item>
      <Item>
        <Feedback>Neutral: {neutral}</Feedback>
      </Item>
      <Item>
        <Feedback>Bad: {bad}</Feedback>
      </Item>
      <Item>
        <Feedback>Total: {total}</Feedback>
      </Item>
      <Item>
        <Feedback>Positive feedback: {positivePercentage}%</Feedback>
      </Item>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
