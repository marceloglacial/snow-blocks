import Post from './Post';

const HeroView = (props) => {
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <Post />
      </div>
      <div className='col-sm-4'>
        <Post />
      </div>
      <div className='col-sm-4'>
        <Post />
      </div>
    </div>
  );
};
export default HeroView;
