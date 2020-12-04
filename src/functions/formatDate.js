/**
 * @name formatDate()
 * @desc returns a formatted date based on options set within the function
 * @param { string } date date to format
 * @return { string } formatted date string
 **/
export const formatDate = (date, format) => {
  const options = {
    weekday: {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    },
    short: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    },
    date: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
    year: {
      year: 'short',
    },
    month: {
      month: 'short',
    },
    day: {
      day: 'numeric',
    },
  };
  return new Date(date).toLocaleDateString(
    'en-US',
    options[format || 'weekday']
  );
};

export default formatDate;
