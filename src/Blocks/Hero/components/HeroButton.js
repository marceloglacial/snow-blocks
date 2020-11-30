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
      <URLInputButton
        className='hero__link'
        url={buttonLink}
        onChange={(buttonLink) => setAttributes({ buttonLink })}
      />
      <button type='button' className='btn btn-primary'>
        <PlainText
          placeholder={'Add Title'}
          value={buttonText}
          onChange={(val) => setAttributes({ buttonText: val })}
        />
      </button>
    </div>
  );
};
export default HeroButton;
