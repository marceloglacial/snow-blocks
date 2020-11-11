const Button = (props) => {
  const { title, type, link, className } = props;
  return (
    <a
      href={link || '#'}
      className={`btn btn-${type || 'primary'} ${className}`}
    >
      {title || 'Add Title'}
    </a>
  );
};
export default Button;
