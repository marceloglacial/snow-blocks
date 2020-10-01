import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import './Hero.scss';
import HeroImage from './HeroImage';

const HeroView = (props) => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <HeroImage {...props} />
      <div className='container'>
        <HeroTitle {...props} />
        <HeroDescription {...props} />
      </div>
    </div>
  );
};
export default HeroView;
