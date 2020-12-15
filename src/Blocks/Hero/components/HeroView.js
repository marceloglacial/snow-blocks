import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import HeroImage from './HeroImage';
import HeroCloseButton from './HeroCloseButton';
import HeroButton from './HeroButton';

const HeroView = (props) => {
  const { env } = props;
  const { hasButton, heroStyle, imagePosition, imageUrl } = props.attributes;

  if (!env && !imageUrl) return null;

  return (
    <div className={`hero hero--${heroStyle} hero--${imagePosition}`}>
      <div className='hero__container'>
        <div className='hero__content'>
          <HeroTitle {...props} />
          <HeroDescription {...props} />
          {hasButton === 'yes' && <HeroButton {...props} />}
        </div>
        <div className='hero__figure'>
          {env && <HeroCloseButton {...props} />}
          <HeroImage {...props} />
        </div>
      </div>
    </div>
  );
};
export default HeroView;
