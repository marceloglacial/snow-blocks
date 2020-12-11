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
      <PlainText
        placeholder={'Add Title'}
        value={buttonText}
        className='btn btn--primary'
        onChange={(val) => setAttributes({ buttonText: val })}
      />
    </div>
  );
};
export default HeroButton;
