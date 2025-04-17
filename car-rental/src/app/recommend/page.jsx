import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RxColorWheel } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {client} from "@/sanity/lib/client"
const Recommend= async()=>{
    const recommendcard=async()=>{
  const getrecommend=  await client.fetch(
    `*[tags[0] == "recommended"][0...8]{
      name,
  "image-url":image.asset->url,
   pricePerDay,
      fuelCapacity,
      transmission,
      seatingCapacity,
      type,
      originalPrice
    }`
  )
  return getrecommend
    }
    const result=await recommendcard()
    console.log("recommend card",result)
    return(
        <>

             <div className="flex justify-between  md:mt-6 md:m-4">
            <h3 className="text-[#90A3BF]  ml-5 font-[500]">Recommendation Car</h3>
            <a className="text-[#3563E9] mr-5 font-[500]  " href="">View All</a>
        </div> 
        <div className=" md:grid md:grid-cols-4 gap-4 md:gap-[30px]  md:mr-9">
       {
        result.map((item)=>{
            return( <div className="w-full  h-  md:w-72 md:h- rounded-[10px] sm:hidden md:block bg-[#FFFFFF] md:ml-3">
              {/* Header Section */}
              <div className="flex justify-between ">
                <div className="w-[px] h-[48px] mt-5 ml-5">
                  <h3 className="text-[17px] font-[700]">{item.name}</h3>
                  <h6 className="text-[#90A3BF]">{item.type}</h6>
                </div>
                <div className="w-[24px] h-[24px] mt-6 mr-4">
                  <CiHeart className="text-[23px]" />
                </div>
              </div>
            
              {/* Image Section */}
              <div className="flex justify-between items-center md:block h-40 ">
                <div className="w-52  ml-3 mt-1  md:w-64 md:h-32 md:p-1 md:ml-2 md:mr-2     md:flex justify-center items-center">
                  <img
                    className="w-full "
                    src={item["image-url"]}
                    alt=""
                  />
                </div>
            
                {/* Icons Vertically After Image */}
                <div className="flex flex-col md:flex-row  mb-4 gap-3 ml-5 md:ml-5 mr-2 md:mt-4 ">
              <span className="flex   font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
                <BsFillFuelPumpFill className="text-[23px] text-[#65748c]" />
                <span className="ml-2">{item.fuelCapacity}</span>
              </span>
              <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
                <RxColorWheel className="text-[23px] text-[#65748c]" />
                <span className="ml-2">{item.transmission}</span>
              </span>
              <span className="flex font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
                <MdPeopleAlt className="text-[23px] text-[#65748c]" />
                <span className="ml-2">{item.seatingCapacity}</span>
              </span>
            </div>
            
            
            
              </div>
            
              {/* Price & Rent Button */}
              <div className="flex justify-between mr-2 gap-14 md:gap-4 mt-7 mb-3 ml-5 md:pb-2">
                <div className="">
                  <h2 className="text-[20px] font-[700]">
                    {item.pricePerDay}/
                    <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
                  </h2>
                  <h2>
                    {/* <del className="text-[#90A3BF] text-[14px] font-[700]">$80.00</del> */}
                  </h2>
                </div>
                <button className="w-28 h-11 md:w-[116px] md:h-[44px]  rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
                  Rent Now
                </button>
              </div>
            </div>
             )
        })
       }
       </div>
        </>
    )
}
export default Recommend