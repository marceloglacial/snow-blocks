const FormView = (props) => (
  <iframe
    width='100%'
    height='600'
    scrolling='no'
    frameBorder='no'
    allow='autoplay'
    src={props.attributes.formUrl}
  ></iframe>
);
export default FormView;
