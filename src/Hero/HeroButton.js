import { PlainText, URLInputButton } from '@wordpress/block-editor';

const HeroButton = (props) => {
  const { attributes, setAttributes, env } = props;
  const { buttonText, buttonLink } = attributes;

  if (!buttonText && !env) return null;
  if (!env)
    return (
      <a href={buttonLink} className={`btn btn--primary hero__button`}>
        {buttonText}
      </a>
    );

  return (
    <div className='hero-button'>
      <URLInputButton
        className='hero-button__link'
        url={buttonLink}
        onChange={(buttonLink) =>
          setAttributes({
            buttonLink,
          })
        }
      />
      <button type='button' className='btn btn-primary hero-button__button'>
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
