const Post = (props) => {
  const { title, excerpt, better_featured_image } = props;

  console.log(props);

  return (
    <div className='card'>
      {better_featured_image && (
        <img
          src={better_featured_image.source_url}
          className='card-img-top'
          alt='image'
        />
      )}
      <div className='card-body'>
        {title && (
          <h5
            className='card-title'
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        )}
        {excerpt && (
          <p
            className='card-text'
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          />
        )}
      </div>
    </div>
  );
};
export default Post;
