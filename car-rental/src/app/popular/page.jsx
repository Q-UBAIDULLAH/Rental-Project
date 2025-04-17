import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RxColorWheel } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
const popular=async()=>{


  const popularcard=async()=>{
const getcard=await client.fetch(
  `*[tags[0] == "popular"]{
  name,
  "image-url":image.asset->url,
   pricePerDay,
      fuelCapacity,
      transmission,
      seatingCapacity,
      type
      
  
  }`
)
return getcard
  }
  const result=await popularcard()
  console.log("result",result)
    return(<>
         <div className="flex justify-between md:m-4  md:-mt-28">
            <h3 className="text-[#90A3BF]  ml-5 font-[500]">Popular Car</h3>
            <a className="text-[#3563E9] mr-5 font-[500]  " href="">View All</a>
        </div> 
    <div className="flex  h- gap-4  md:gap-[14px] sm:gap-2 mt-8 overflow-x-scroll no-scrollbar md:overflow-x-hidden w-full md:mt-6  ">

{result.map((item)=>{
return(
  
    


<div className="w-72 h-80  md:h-[340px] md:ml-3  sm:w-70 sm:h-96  rounded-[10px]  bg-[#FFFFFF] ">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[20px] font-[700]">{item.name}</h3>
<h6 className="text-[#90A3BF]">{item.type}</h6>
</div>

<div className="w-[24px] h-[24px] mt-6 mr-4">
<FcLike className="text-[21px] "/>
</div>

</div>

{/* bg-black */}

<div className="w-64 h-32 p-1 ml-2 mr-2   mt-3  flex justify-center items-center ">
  <img className="w-full   object-cover" 
       src={item["image-url"]} 
       alt="Car" />
</div>



<div className="flex gap-4 mt-2 ml-3 md:mt-4  md:ml-5 sm:ml-2 ">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    {item.fuelCapacity}
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    {item.transmission}
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    {item.seatingCapacity}
  </span>
</div>
{/* bg-zinc-900 */}
<div className="flex justify-between gap-4 mt-7 ml-4   md:mr-2">
   <div className="w-[116px] h-[44px]   ">
    <h2 className="text-[20px] font-[700] ">{item.pricePerDay}/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>


    </div> 
    <button className="w-[116px] h-[43px]  rounded-[4px] bg-[#3563E9] text-[#FFFFFF] ">Rent Now</button>
</div>

</div>














)
})}

</div>
    </>)
}
export default popular