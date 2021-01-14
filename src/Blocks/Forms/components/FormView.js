const FormView = (props) => (
  <iframe
    width='100%'
    height='500'
    scrolling='no'
    frameBorder='no'
    allow='autoplay'
    src={props.attributes.formUrl}
  ></iframe>
);
export default FormView;
