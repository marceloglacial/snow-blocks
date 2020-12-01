import useMedia from '../../../functions/useMedia';
import PostsListTitle from './PostsListTitle';

const PostsListsView = (props) => {
  const { data = [], isLoading = true, isError = false } = props;
  if (isLoading) return 'Loading ...';
  if (isError) return 'Error ...';

  return (
    <div className='postslist'>
      <PostsListTitle {...props.props} />
      <div className='cardgrid'>
        {data.map((item) => {
          const { id, title, excerpt, featured_media } = item;
          const { media, isLoading } = useMedia(featured_media);

          if (isLoading) return 'loading ...';
          const imageUrl = media.source_url;

          return (
            <div className='card' key={id}>
              {featured_media !== 0 && (
                <img
                  src={imageUrl}
                  className='card__image'
                  alt='...'
                  width='200'
                  height='100'
                />
              )}
              <div className='card__body'>
                <h5 className='card__title'>{title.rendered}</h5>
                <p
                  className='card__text'
                  dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostsListsView;
