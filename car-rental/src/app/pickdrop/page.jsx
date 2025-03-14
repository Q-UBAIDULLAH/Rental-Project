import { IoIosRadioButtonOn } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";



const Pick_Drop=()=>{
return(
<>

{/* 
<div className="md:flex sm:flex-none  gap-1">


<div className="w-[552px] h-[132px] ml-16 rounded-[10px] 
 mt-7  mx-11 bg-white">

<div className="flex  gap-2 mx-10 my-4"><IoIosRadioButtonOn className="mt-[3px]  text-[#3563E9]"/><h2 className="font-[500] mt-[-2px]"> Pick-Up</h2></div>

<div className="flex mx-11 my-4 gap-7">

<div className=" ">
<h2 className="font-[600]">Locations</h2>
    <select className="w-32 text-[#90A3BF] text-[14px]">
        <option className=""> Select your city</option>
      
    </select>
    </div>
    <span className="border-r border-[#C3D4E9]"></span>
<div className="">
<h2 className="font-[600]">Date</h2>
    <select className="w-32  text-[#90A3BF] text-[14px]">
        <option value="">Select your date</option>
      
    </select>
    </div>
    <span className="border-r border-[#C3D4E9]"></span>
<div className="">
<h2 className="font-[600]">Time</h2>
    <select className="w-32  text-[#90A3BF] text-[14px]">
        <option  value="">Select your time</option>
    
    </select>
    </div>



</div>



</div>
<div className="md:relative md:right-[342px] md:mt-16 flex items-center justify-cente rounded-[12px] bg-[#3563E9]  sm:w-11 sm:h-10 md:w-12 md:h-12 sm:ml-80"><RiArrowUpDownLine fontSize={35} className="text-white ml-1.5"/></div>


<div className="md:w-[532px] md:h-[132px] sm:w-[544px] sm:h-[132px]  md:mt-7 md:-mx-[310px] sm:mx-16 sm:-mt-4 rounded-md bg-white hello" >

<div className="flex gap-2 mx-10 my-4"><IoIosRadioButtonOn className="text-[#5CAFFC]"/><h2 className="font-[500] mt-[-3px]"> Drop-Off</h2></div>

<div className="flex mx-11 my-4 gap-6">

<div className=" ">
<h2 className="font-[600]">Locations</h2>
    <select className="w-32 text-[#90A3BF] text-[14px]">
        <option className="" value="">Select your city</option>
      
    </select>
    </div>
    <span className="border-r border-[#C3D4E9]"></span>
<div className="">
<h2 className="font-[600]">Date</h2>
    <select className="w-32  text-[#90A3BF] text-[14px]">
        <option value="">Select your date</option>
      
    </select>
    </div>
    <span className="border-r border-[#C3D4E9]"></span>
<div className="">
<h2 className="font-[600]">Time</h2>
    <select className="w-32  text-[#90A3BF] text-[14px]">
        <option  value="">Select your time</option>
    
    </select>
    </div>



</div>

</div>



 </div> */}



<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full p-4 md:-mt-5 ">
      
      {/* Pick-Up Box */}
      <div className="w-full md:w-[552px] h-auto md:h-[132px] rounded-[10px] bg-[#FFFFFF] p-4">
        <div className="flex items-center gap-2 mb-4">
          <IoIosRadioButtonOn className="text-[#3563E9]" />
          <h2 className="font-medium">Pick-Up</h2>
        </div>

        <div className="flex  md:flex-row items-center gap-4 b">
          {/* Location */}
          <div className="w-full md:w-auto">
            <h2 className="font-semibold">Location</h2>
            <select className="w-full md:w-32 text-black text-[14px]  rounded ">
              <option>Gulshan</option>
            </select>
          </div>
          <span className=" border border-[#f3f5f7]  h-10 "></span>

          {/* Date */}
          <div className="w-full md:w-auto ">
            <h2 className="font-semibold">Date</h2>
            <select className="w-full md:w-32 text-black  text-[14px] rounded ">
              <option>20/9/24</option>
            </select>
          </div>
          <span className="border border-[#f3f5f7] h-10"></span>

          {/* Time */}
          <div className="w-full md:w-auto">
            <h2 className="font-semibold">Time</h2>
            <select className="w-full md:w-32 text-black  text-[14px] rounded ">
              <option>07:00</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3563E9] text-white">
        <RiArrowUpDownLine fontSize={30} />
      </div>

      {/* Drop-Off Box */}
      <div className="w-full md:w-[552px] h-auto md:h-[132px] rounded-[10px] bg-[#FFFFFF] p-4">
        <div className="flex items-center gap-2 mb-4">
          <IoIosRadioButtonOn className="text-[#5CAFFC]" />
          <h2 className="font-medium">Drop-Off</h2>
        </div>

        <div className="flex  md:flex-row items-center gap-4">
          {/* Location */}
          <div className="w-full md:w-auto">
            <h2 className="font-semibold">Location</h2>
            <select className="w-full md:w-32 text-black  text-[14px]   rounded">
              <option>Bahria</option>
            </select>
          </div>
          <span className=" border-r border-[#f3f5f7] h-10"></span>

          {/* Date */}
          <div className="w-full md:w-auto">
            <h2 className="font-semibold">Date</h2>
            <select className="w-full md:w-32 text-black  text-[14px]  rounded">
              <option>21/9/24</option>
            </select>
          </div>
          <span className=" border-r border-[#f3f5f7] h-10"></span>

          {/* Time */}
          <div className="w-full md:w-auto">
            <h2 className="font-semibold">Time</h2>
            <select className="w-full md:w-32 text-black  text-[14px]   rounded">
              <option>01:00</option>
            </select>
          </div>
        </div>
      </div>

    </div>

 <br />
 <br />
 <br />
 <br />
 <br />




</>)
}
export default Pick_Drop