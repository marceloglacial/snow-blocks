import { PlainText } from '@wordpress/block-editor';

const PostsListTitle = (props) => {
  const { attributes, setAttributes } = props;
  const { title } = attributes;

  return (
    <h2 className={`postslist__title`}>
      <PlainText
        placeholder={'Add Title'}
        value={title}
        onChange={(val) => setAttributes({ title: val })}
      />
    </h2>
  );
};
export default PostsListTitle;
