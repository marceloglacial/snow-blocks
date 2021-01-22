import useRest from '../../../hooks/useRest';

const InstagramFeedView = (props) => {
  const { userID, itemsNumber, imageType } = props.attributes;
  const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":${userID},"first":${itemsNumber}}`;
  const { data, isLoading, isError } = useRest(url);

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading ...</p>;

  if (!data.data) return <p>No items.</p>;
  const array = data.data.user.edge_owner_to_timeline_media.edges;

  return (
    <div className={`row row-cols-1 row-cols-md-2 g-4`}>
      {array.map((item) => {
        const {
          id,
          display_url,
          thumbnail_src,
          edge_media_to_caption,
          shortcode,
        } = item.node;
        const title = edge_media_to_caption.edges[0];
        const imageSrc = imageType !== 'default' ? thumbnail_src : display_url;

        return (
          <div className={`col`} key={id}>
            <div className='card'>
              <img src={imageSrc} alt='' className='card__image' />
              <div className={`card__body`}>
                {title && <div className='card__title'>{title.node.text}</div>}
                <a
                  href={`https://www.instagram.com/p/${shortcode}`}
                  target='_blank'
                >
                  Original Post
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default InstagramFeedView;
