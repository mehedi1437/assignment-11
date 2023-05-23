import '../../../index.css'

const Gallery = () => {
  return (
    <div>
      <h1 className="lg:text-6xl text-center mt-14 custom-font text-[#f379a7]">Our Toys Gallery</h1>
      <p className='text-2xl custom-font2 text-center my-8' >Epic fighter shop</p>
      <div className="lg:grid grid-rows-2 grid-cols-4 gap-4 ">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
        <img
          className="h-full w-full col-span-2"
          src="https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
          alt=""
        />

        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <img
          className="h-full w-full col-span-2"
          src="https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <img
        className="col-span-2 h-full w-full"
          src="https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <img
        className="w-full h-full col-span-2"
          src="https://images.unsplash.com/photo-1558335101-cf872fa02538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
