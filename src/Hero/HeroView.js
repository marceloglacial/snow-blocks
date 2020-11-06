import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import HeroImage from './HeroImage';
import HeroCloseButton from './HeroCloseButton';
import HeroButton from './HeroButton';
import './Hero.scss';

const HeroView = (props) => {
  const { env } = props;
  const { hasButton, heroStyle } = props.attributes;
  return (
    <div className={`hero hero--${heroStyle} jumbotron jumbotron-fluid`}>
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
