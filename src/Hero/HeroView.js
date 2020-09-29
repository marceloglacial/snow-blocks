const HeroView = (props) => {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleCaptions'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
        <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2426&q=80'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&auto=format&fit=crop&w=2857&q=80'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2614&q=80'
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleCaptions'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleCaptions'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};
export default HeroView;
