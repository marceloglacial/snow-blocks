const Post = () => {
  return (
    <div className='card'>
      <img
        src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2426&q=80'
        className='card-img-top'
        alt='image'
      />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Post;
