import PostsListTitle from './PostsListTitle';
import PostListLoading from './PostListLoading';
import PostListImage from './PostListImage';
import PostListEmpty from './PostListEmpty';
import formatDate from '../../../functions/formatDate';
import Alert from '../../Alert/Alert';

const PostsListsView = (props) => {
  const { data, isLoading, isError } = props;
  const { showImage, showText, showDate } = props.props.attributes;

  if (isLoading) return <PostListLoading />;
  if (isError) return <Alert title='Error! Please active your permalinks.' />;

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
          const { id, date, title, excerpt, featured_media, link } = item;
          const hasImage = featured_media !== 0;
          return (
            <a href={link} className='card' key={id}>
              {showImage === 'yes' && (
                <figure
                  className={`card__figure ${
                    !hasImage && `card__figure--no-image`
                  }`}
                >
                  {hasImage && <PostListImage {...item} />}
                </figure>
              )}
              <div className='card__body'>
                <h5 className='card__title'>{title.rendered || ''}</h5>
                {showDate === 'yes' && (
                  <p className='card__date'>{formatDate(date)}</p>
                )}
                {showText === 'yes' && (
                  <div
                    className='card__text'
                    dangerouslySetInnerHTML={{ __html: excerpt.rendered || '' }}
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default PostsListsView;
