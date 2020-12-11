const Alert = (props) => {
  const { title } = props;
  return <div className='alert'>{title || ''}</div>;
};
export default Alert;
