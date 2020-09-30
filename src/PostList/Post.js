const Post = (props) => {
  const { title, excerpt } = props;

  console.log(props);

  return (
    <div className='card'>
      <img
        src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2426&q=80'
        className='card-img-top'
        alt='image'
      />
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
