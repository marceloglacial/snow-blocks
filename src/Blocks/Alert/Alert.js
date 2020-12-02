import './styles/alert-styles.scss';

const Alert = (props) => {
  const { title } = props;
  return <div className='alert'>{title || ''}</div>;
};
export default Alert;
