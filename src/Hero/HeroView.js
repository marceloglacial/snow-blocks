import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';

const HeroView = (props) => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <HeroTitle {...props} />
        <HeroDescription {...props} />
      </div>
    </div>
  );
};
export default HeroView;
