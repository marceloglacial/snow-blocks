import useRest from '../../../hooks/useRest';

const InstagramFeedView = (props) => {
  const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":${props.attributes.userID},"first":6}`;
  const { data, isLoading, isError } = useRest(url);

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading ...</p>;

  const array = data.data.user.edge_owner_to_timeline_media.edges;
  return (
    <div className={`row row-cols-1 row-cols-md-2 g-4`}>
      {array.map((item) => {
        const { id, display_url, edge_media_to_caption, shortcode } = item.node;
        const title = edge_media_to_caption.edges[0];
        return (
          <a
            href={`https://www.instagram.com/p/${shortcode}`}
            target='_blank'
            key={id}
          >
            <div className={`col`}>
              <div className='card'>
                <img src={display_url} className='card__image' />
                <div className={`card__body`}>
                  {title && (
                    <div className='card__title'>{title.node.text}</div>
                  )}
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default InstagramFeedView;
