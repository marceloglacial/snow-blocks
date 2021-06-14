import { RichText } from '@wordpress/block-editor';

const HeroDescription = (props) => {
  const { attributes, setAttributes, env } = props;
  const { description } = attributes;

  if (!description && !env) return null;
  if (!env)
    return (
      <div
        className={`hero__description`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );

  return (
    <RichText
      tagName='p'
      placeholder={'Add Description'}
      value={description}
      className={`hero__description`}
      onChange={(val) => setAttributes({ description: val })}
    />
  );
};
export default HeroDescription;
