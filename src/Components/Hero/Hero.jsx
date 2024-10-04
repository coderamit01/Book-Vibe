import BookImg from '../../assets/images/9.png'
import GreenBtn from '../share/GreenBtn/GreenBtn';

const Hero = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="hero bg-base-200 min-h-screen rounded-2xl">
        <div className="grid md:grid-cols-2 gap-3 items-center px-3 md:px-20">
          <div>
            <h1 className="text-5xl font-bold mb-10 text-black">Books to freshen up your bookshelf</h1>
            <GreenBtn text="View The List" link='/listed-book' />
          </div>
          <img
            src={BookImg}
            className="w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;