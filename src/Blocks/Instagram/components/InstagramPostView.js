const InstagramPostView = (props) => {
  return (
    <div id='instagram-container'>
      <blockquote
        id='instagram-media'
        className='instagram-media'
        data-instgrm-captioned
        data-instgrm-permalink={props.attributes.url}
        data-instgrm-version='13'
      />
    </div>
  );
};
export default InstagramPostView;
