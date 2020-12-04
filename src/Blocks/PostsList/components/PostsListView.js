import PostsListTitle from './PostsListTitle';
import PostListLoading from './PostListLoading';
import PostListImage from './PostListImage';
import PostListEmpty from './PostListEmpty';
import formatDate from '../../../functions/formatDate';

const PostsListsView = (props) => {
  const { data, isLoading, isError } = props;
  const { showImage, showText, showDate } = props.props.attributes;

  if (isLoading) return <PostListLoading />;
  if (isError) return 'Error ...';

  const hasData = data.length !== 0;
  if (!hasData) {
    return (
      <div className='postslist'>
        <PostsListTitle {...props.props} />
        <PostListEmpty />
      </div>
    );
  }

  return (
    <div className='postslist'>
      <PostsListTitle {...props.props} />
      <div className='cardgrid'>
        {data.map((item) => {
          const { id, date, title, excerpt, featured_media } = item;
          return (
            <div className='card' key={id}>
              {featured_media !== 0 && showImage === 'yes' && (
                <PostListImage {...item} />
              )}
              <div className='card__body'>
                <h5 className='card__title'>{title.rendered || ''}</h5>
                {showDate === 'yes' && (
                  <p className='card__date'>{formatDate(date)}</p>
                )}
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
