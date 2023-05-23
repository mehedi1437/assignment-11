
import '../../../index.css'
const PlayingPage = () => {
  return (
    <div className="lg:flex my-16 items-center">
      <div className="lg:w-1/2">
        <img className=" lg:h-96 lg:w-96 h-60 w-60 rounded-full m-6 lg:ml-12" src="https://plus.unsplash.com/premium_photo-1661569213353-77e0f48fc27f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="lg:w-1/2 text-left m-10">
        <h1 className="text-6xl mb-6 text-red-400 custom-font">Hello There</h1>
        <p className="text-3xl custom-font2 my-5">Welcome to Epic Fighters!</p>
        <p>
          At Epic FIghter, we are dedicated to providing children with a world of fun,
          imagination, and endless play possibilities. We believe that toys are more than just
          objects; they are companions, teachers, and sources of joy that help children explore
          their creativity and expand their horizons.
          <br />
          Our goal is to offer a carefully curated selection of toys that inspire, entertain,
          and encourage the development of essential skills. We believe in the power of play to
          nurture cognitive, physical, and emotional growth, and we strive to bring you toys
          that foster learning and enjoyment simultaneously.
        </p>
      </div>
    </div>
  );
};

export default PlayingPage;
