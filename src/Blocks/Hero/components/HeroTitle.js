import { PlainText } from '@wordpress/block-editor';

const HeroTitle = (props) => {
  const { attributes, setAttributes, env } = props;
  const { title } = attributes;

  if (!title && !env) return null;
  if (!env) return <h1 className={`hero__title`}>{title}</h1>;

  return (
    <h1 className={`hero__title`}>
      <PlainText
        placeholder={'Add Title'}
        value={title}
        onChange={(val) => setAttributes({ title: val })}
      />
    </h1>
  );
};
export default HeroTitle;
