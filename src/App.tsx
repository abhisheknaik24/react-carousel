import Carousel from './Carousel';

const App = () => {
  return (
    <>
      <Carousel auto>
        <img
          src='https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg'
          style={{ height: '300px', width: '300px', objectFit: 'cover' }}
          alt='image'
        />
        <img
          src='https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/3cde1560-8fa1-45f9-8788-2ccd13b8f901.jpeg'
          style={{ height: '300px', width: '300px', objectFit: 'cover' }}
          alt='image'
        />
      </Carousel>
    </>
  );
};

export default App;
