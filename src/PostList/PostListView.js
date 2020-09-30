import Post from './Post';

const HeroView = (props) => {
  const { posts = [] } = props.attributes;

  // Loading state
  if (posts.length == 0) return <p>Loading ...</p>;

  const cards = posts.map((post) => <Post {...post} key={post.id} />);

  return <div className='card-deck'>{cards}</div>;
};
export default HeroView;
