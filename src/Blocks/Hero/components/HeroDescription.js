import { RichText } from '@wordpress/block-editor';

const HeroDescription = (props) => {
  const { attributes, setAttributes, env } = props;
  const { description } = attributes;

  if (!description && !env) return null;
  if (!env) return <p className={`hero__description`}>{description}</p>;

  return (
    <p className={`hero__description`}>
      <RichText
        placeholder={'Add Description'}
        value={description}
        onChange={(val) => setAttributes({ description: val })}
      />
    </p>
  );
};
export default HeroDescription;
