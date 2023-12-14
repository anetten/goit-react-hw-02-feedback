import css from './Feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.feedback}>
    <button className={css.button} onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);
