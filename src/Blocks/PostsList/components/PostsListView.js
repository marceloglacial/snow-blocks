const PostsListsView = (props) => {
  const { data = [], isLoading = true, isError = false } = props;
  if (isLoading) return 'Loading ...';
  if (isError) return 'Error ...';

  return (
    <div className='card-deck'>
      {data.map((item) => {
        const { id, title, excerpt, better_featured_image } = item;
        return (
          <div className='card' key={id}>
            {better_featured_image && (
              <img
                src={better_featured_image.source_url}
                className='card-img-top'
                alt='...'
                width='200'
                height='100'
              />
            )}
            <div className='card-body'>
              <h5 className='card-title'>{title.rendered}</h5>
              <p
                className='card-text'
                dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostsListsView;
