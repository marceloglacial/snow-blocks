import { PlainText, URLInputButton } from '@wordpress/block-editor';
import Button from '../../Button/Button';

const HeroButton = (props) => {
  const { attributes, setAttributes, env } = props;
  const { buttonText, buttonLink } = attributes;

  if (!buttonText && !env) return null;
  if (!env)
    return (
      <Button
        title={buttonText}
        link={buttonLink || '#'}
        type={'primary'}
        className={'hero__button'}
      />
    );

  return (
    <div className='hero__button'>
      <div className='hero__link'>
        <URLInputButton
          url={buttonLink}
          onChange={(buttonLink) => setAttributes({ buttonLink })}
        />
      </div>
      <div className='btn btn--primary'>
        <PlainText
          placeholder={'Add Title'}
          value={buttonText}
          onChange={(val) => setAttributes({ buttonText: val })}
        />
      </div>
    </div>
  );
};
export default HeroButton;
