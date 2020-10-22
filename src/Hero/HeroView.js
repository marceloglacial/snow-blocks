import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import './Hero.scss';
import HeroImage from './HeroImage';
import HeroCloseButton from './HeroCloseButton';

const HeroView = (props) => {
  const { env } = props;
  return (
    <div className='hero jumbotron jumbotron-fluid'>
      {env && <HeroCloseButton {...props} />}
      <HeroImage {...props} />
      <div className='container'>
        <HeroTitle {...props} />
        <HeroDescription {...props} />
      </div>
    </div>
  );
};
export default HeroView;
