import PostsListTitle from './PostsListTitle';
import PostListLoading from './PostListLoading';
import PostListImage from './PostListImage';

const PostsListsView = (props) => {
  const { data, isLoading, isError } = props;
  const { showImage, showText } = props.props.attributes;

  if (isLoading) return <PostListLoading />;
  if (isError) return 'Error ...';

  const hasData = data.length !== 0;
  if (!hasData) {
    return (
      <div className='postslist'>
        <PostsListTitle {...props.props} />
        <div className='cardgrid'>
          <div className='card'>
            <div className='card__body'>
              <h5 className='card__title'>No posts</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='postslist'>
      <PostsListTitle {...props.props} />
      <div className='cardgrid'>
        {data.map((item) => {
          const { id, title, excerpt, featured_media } = item;
          return (
            <div className='card' key={id}>
              {featured_media !== 0 && showImage === 'yes' && (
                <PostListImage {...item} />
              )}
              <div className='card__body'>
                <h5 className='card__title'>{title.rendered || ''}</h5>
                {showText === 'yes' && (
                  <p
                    className='card__text'
                    dangerouslySetInnerHTML={{ __html: excerpt.rendered || '' }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostsListsView;
