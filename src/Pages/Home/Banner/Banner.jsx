import img from "../../../assets/banner2.png.png";
import '../../../../src/index.css'

const Banner = () => {
    // #f379a7 
    // #fcdcea
  return (
    <div className="bg-[#c2e0eb] lg:flex lg:px-20 lg:pt-32 px-14 pt-14  " >
      <div className="">

        <p className="lg:text-8xl text-6xl  custom-font lg:pt-20  ">Best Kids Store <br /> & Online Shop</p>
        <p className="custom-font2 mt-5 lg:text-3xl text-2xl">Give The Gift Of Your Children Everyday</p>
        <button className="btn bg-[#f379a7] hover:bg-[#3c85a2] border-none mt-5">Shop This Now</button>
      </div>
      <div>
        <img className="lg:ml-28 " src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
