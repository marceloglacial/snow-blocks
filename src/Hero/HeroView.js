import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import './Hero.scss';
import HeroImage from './HeroImage';
import HeroCloseButton from './HeroCloseButton';
import HeroButton from './HeroButton';

const HeroView = (props) => {
  const { env } = props;
  const { hasButton } = props.attributes;
  return (
    <div className='hero jumbotron jumbotron-fluid'>
      {env && <HeroCloseButton {...props} />}
      <HeroImage {...props} />
      <div className='container'>
        <HeroTitle {...props} />
        <HeroDescription {...props} />
        {hasButton === 'yes' && <HeroButton {...props} />}
      </div>
    </div>
  );
};
export default HeroView;
