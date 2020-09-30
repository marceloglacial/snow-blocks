const Post = (props) => {
  const { title, excerpt, better_featured_image, link } = props;
  return (
    <div className='card'>
      <a href={link}>
        {better_featured_image && (
          <img
            src={better_featured_image.media_details.sizes.medium.source_url}
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
      </a>
    </div>
  );
};
export default Post;
