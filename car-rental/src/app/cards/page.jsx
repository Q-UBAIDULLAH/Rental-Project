import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RxColorWheel } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
const Cards=()=>{
    return(
        <>
     {/* <div className="flex justify-between  ">
            <h3 className="text-[#90A3BF]  ml-5 font-[500]">Popular Car</h3>
            <a className="text-[#3563E9] mr-5 font-[500]  " href="">View All</a>
        </div> */}


        {/* bg-slate-500 */}


      
jjj




{/* 

<div className="m-5">
<h3 className="align text-[#90A3BF] ml-12 font-[500]">Recomendation Car</h3>
</div>

 */}













<div className="flex flex-col m-5  gap-4 bg-black md:gap-[14px] sm:gap-2 mt-8 ">

{/* bg-zinc-400 */}




<div className="w-full h- rounded-[10px] sm:hidden md:block bg-[#ffffff]">
  {/* Header Section */}
  <div className="flex justify-between">
    <div className="w-[128px] h-[48px] mt-5 ml-5">
      <h3 className="text-[20px] font-[700]">All New Rush</h3>
      <h6 className="text-[#90A3BF]">SUV</h6>
    </div>
    <div className="w-[24px] h-[24px] mt-6 mr-4">
      <CiHeart className="text-[23px]" />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex  justify-between items-center h-40">
    <div className="w-52 ml-3 mt-1 ">
      <img
        className="h-full w-full object-cover"
        src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=npUUdfARo42nXPfuyur6Quv8q3VcS4g9g9gC~CmKk4HAB5CNUwsA6V1nY5cU1EvxYdUT7xxNeZA7PQkNavfATw1cB9aSX~h725XT79uraWw3sok8ubh0CfEG3aI1rPmzi9H1sUjEE9ztEpvcnzBGKTmd5EyhNsu-B5rwvmIwgbH~M~ToWrM86llAWPoixSyQHw2obSH8PLgfLUMNIVZC3~ziLQ7jDBqeRdHP-L1sgD6Bz9-aMbDzw74p4Qzd3aUs95KxcEnMACmNXKmiSamri-bJ2I~S2wl1PjYrvXO5ez-ftjKpeGBcQmHQdXzZBEKJLlBcUqYdZpWUgS7b5TyChA__"
        alt=""
      />
    </div>

    {/* Icons Vertically After Image */}
    <div className="flex flex-col mb-4 gap-3 ml-5 mr-2 ">
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <BsFillFuelPumpFill className="text-[23px] text-[#65748c]" />
    <span className="ml-2">70L</span>
  </span>
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <RxColorWheel className="text-[23px] text-[#65748c]" />
    <span className="ml-2">Manual</span>
  </span>
  <span className="flex font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <MdPeopleAlt className="text-[23px] text-[#65748c]" />
    <span className="ml-2">6 People</span>
  </span>
</div>



  </div>

  {/* Price & Rent Button */}
  <div className="flex justify-between mr-2 gap-14 mt-7 ml-5">
    <div className="">
      <h2 className="text-[20px] font-[700]">
        $72.00/
        <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
      </h2>
      <h2>
        <del className="text-[#90A3BF] text-[14px] font-[700]">$80.00</del>
      </h2>
    </div>
    <button className="w-28 h-11 md:w-[116px] md:h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
      Rent Now
    </button>
  </div>
</div>




<div className="w-full h- rounded-[10px] sm:hidden md:block bg-white">
  {/* Header Section */}
  <div className="flex justify-between">
    <div className="w-[128px] h-[48px] mt-5 ml-5">
      <h3 className="text-[20px] font-[700]">CR - V</h3>
      <h6 className="text-[#90A3BF]">Sport</h6>
    </div>
    <div className="w-[24px] h-[24px] mt-6 mr-4">
      <CiHeart className="text-[23px]" />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex  justify-between items-center h-40 ">
    <div className="w-52 ml-3 mt-1 ">
      <img
        className="  object-cover scale-x-[-1]"
        src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gZSk7Nk~tvBs9dnxBjysou-DvN41gqdgXJuYOvhI3g0Sz97BmZJGDHJRV0i88UAnecQWQCRTXg4mBHuxhsDbzCYXHXRyxfVAOaMeyENpfkGOWQGuolaPrb3Ugou7n4JVriw03All21Owp3fNhDK4yR2sbDcX58z72bI88EE5SBk3hkKdjXx66snKim4ei1bhF0WeNTta2Zk8EK9uAmWbAcRU03dNsCnB0Ee~761rlah0yLOK4TT9y4RKI4i7jIaRrWP~tMRKudXu~C46BGixF37QRhH9KUqs4zvp~pjcIymMaZC~XdrXiRVQEUe3nEuV1NrQsklptFVpCE~wjuVeYw__"
        alt=""
      />
    </div>

    {/* Icons Vertically After Image */}
    <div className="flex flex-col mb-4 gap-3 ml-5 mr-2 ">
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <BsFillFuelPumpFill className="text-[23px] text-[#65748c]" />
    <span className="ml-2">80L</span>
  </span>
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <RxColorWheel className="text-[23px] text-[#65748c]" />
    <span className="ml-2">Manual</span>
  </span>
  <span className="flex font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <MdPeopleAlt className="text-[23px] text-[#65748c]" />
    <span className="ml-2">6 People</span>
  </span>
</div>



  </div>

  {/* Price & Rent Button */}
  <div className="flex justify-between mr-2 gap-14 mt-7 mb-3 ml-5">
    <div className="">
      <h2 className="text-[20px] font-[700]">
        $80.00/
        <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
      </h2>
      <h2>
        {/* <del className="text-[#90A3BF] text-[14px] font-[700]">$80.00</del> */}
      </h2>
    </div>
    <button className="w-28 h-11 md:w-[116px] md:h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
      Rent Now
    </button>
  </div>
</div>







<div className="w-full h- rounded-[10px] sm:hidden md:block bg-white">
  {/* Header Section */}
  <div className="flex justify-between ">
    <div className=" mt-5 ml-5">
      <h3 className="text-[20px] font-[700]">All New Terios</h3>
      <h6 className="text-[#90A3BF]">SUV</h6>
    </div>
    <div className="w-[24px] h-[24px] mt-6 mr-4">
      <CiHeart className="text-[23px]" />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex  justify-between items-center h-40">
    <div className="w-52 ml-3 mt-1 ">
      <img
        className="object-cover mirror-x or scale-x-[1]"
        src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=npUUdfARo42nXPfuyur6Quv8q3VcS4g9g9gC~CmKk4HAB5CNUwsA6V1nY5cU1EvxYdUT7xxNeZA7PQkNavfATw1cB9aSX~h725XT79uraWw3sok8ubh0CfEG3aI1rPmzi9H1sUjEE9ztEpvcnzBGKTmd5EyhNsu-B5rwvmIwgbH~M~ToWrM86llAWPoixSyQHw2obSH8PLgfLUMNIVZC3~ziLQ7jDBqeRdHP-L1sgD6Bz9-aMbDzw74p4Qzd3aUs95KxcEnMACmNXKmiSamri-bJ2I~S2wl1PjYrvXO5ez-ftjKpeGBcQmHQdXzZBEKJLlBcUqYdZpWUgS7b5TyChA__"
        alt=""
      />
    </div>

    {/* Icons Vertically After Image */}
    <div className="flex flex-col mb-4 gap-3 ml-5 mr-2 ">
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <BsFillFuelPumpFill className="text-[23px] text-[#65748c]" />
    <span className="ml-2">90L</span>
  </span>
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <RxColorWheel className="text-[23px] text-[#65748c]" />
    <span className="ml-2">Manual</span>
  </span>
  <span className="flex font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <MdPeopleAlt className="text-[23px] text-[#65748c]" />
    <span className="ml-2">6 People</span>
  </span>
</div>



  </div>

  {/* Price & Rent Button */}
  <div className="flex justify-between mr-2 gap-14 mt-7 mb-3 ml-5">
    <div className="">
      <h2 className="text-[20px] font-[700]">
        $74.00/
        <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
      </h2>
      {/* <h2>
        <del className="text-[#90A3BF] text-[14px] font-[700]">$100.00</del>
      </h2> */}
    </div>
    <button className="w-28 h-11 md:w-[116px] md:h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
      Rent Now
    </button>
  </div>
</div>










{/* ye 2 card neche se opr lae hen for sm: ke liye*/}

{/* <div className="w-[296px] md:h-[380px] sm:w-96 sm:h-[296px] sm:mt-4 md:mt-0  md:hidden sm:block  rounded-[10px] bg-white">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[17px] font-[700]">MGZX Exclusive</h3>
<h6 className="text-[#90A3BF]">Hatchback</h6>
</div>

<div className="w-[24px] h-[24px] mt-6 mr-4">
<FcLike className="text-[21px] "/>
</div>

</div>

<div className="w-[232px] h-[90px] ml-[36px] mt-[51px]  ">
<img className="h-full w-full object-cover" src="https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJpXAVy9s9tgcJZELXegAIaVRTUCuvldtsCVdHHrUtnPLc6hPATtpqS0jKxh0WJ4ophhbXRXLmm8ngmLoAKNKDHvx5K5Lt6ifQ6nk-MK8QNS9y8QCzMPTjej3CTAQ0Dx6V6vdnh3VsaoA9BNmI-g~Z0dHsgaKfCVaOFcOszZ2qzqQmtfoWSdwx~DB5XBa016N0-HHMtc5rL-hyhGknEEQM1S3NuOXZTRqjPdCb7jnG-XlC9Kx79VriiDadrqkXzf8EnkuZta24osSFTyBBKp5g6iXycUUosSVpuamhz2SfA9G9oFNKTsj-qvOHjlVtIKRPsC31cg~FrC7RZPcd6fFQ__" alt="" />
</div>


<div className="md:flex md:gap-6  md:mt-[55px] md:ml-5 sm:ml-72  sm:-mt-28">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    70L
  </span>
  <span className="flex items-center font-[500] text-[14px] md:mt-0 sm:mt-3 text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    Manual
  </span>
  <span className="flex items-center font-[500] text-[14px] md:mt-0 sm:mt-3 text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    4 People
  </span>
</div>

<div className="flex md:gap-8 sm:gap-28 md:mt-7 ml-5 sm:mt-11">
   <div className="w-[116px] h-[44px]  ">
    <h2 className="text-[20px] font-[700]">$76.00/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>
    <h2> <del className="text-[#90A3BF] text-[14px] font-[700]"> $80.00</del></h2>
    </div> 
    <button className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">Rent Now</button>
</div>

</div> */}





{/* ye 2 card neche se opr lae hen for sm: ke liye*/}


{/* 
<div className="w-[296px] md:h-[380px] sm:w-96 sm:h-[296px] sm:mt-4 md:mt-0  md:hidden sm:block  rounded-[10px] bg-white">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[20px] font-[700]">New MGZS</h3>
<h6 className="text-[#90A3BF]">SUV</h6>
</div>
<div className="w-[24px] h-[24px] mt-6 mr-4">
<CiHeart className="text-[23px] "/>
</div>



</div>


<div className="w-[232px] h-[90px] ml-[36px] mt-[51px]  ">
<img className=" object-cover mirror-x or scale-x-[-1]" src="https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNeL166qzjWUxH-Q2IfSnTVlYjf1f~VYTLhrOIwzUfxVwgiLlN2gsjofulMB-~sYc~hp4seJviR~QjS2SPUH7MnZRy09E9v8gn-R1BGAkSdjzcQH90mssUw6Dc7xA9KHet2ljLS6ozGZYdAX2zLnvtXy1duuZA1EOPVEc5REeWT-swtanfyhBhviQ-sdta~R0sjqCBb2LCUmfOGrUMaK~9E1G7fwvCDxCWwCxa41OurLbPSdma0vImFK9p7xXqjHhqpE35hOJZAhcHkwsMza59ZjoxKBsUHaszC3HkZLmOX8VGlPbQsARRAufdR3n3R2lJ6ptdc0qElaos126qwJlw__" alt="" />
</div>


<div className="md:flex md:gap-6  md:mt-[55px] md:ml-5 sm:ml-72  sm:-mt-28">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    80L
  </span>
  <span className="flex items-center font-[500] text-[14px] md:mt-0 sm:mt-3 text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    Manual
  </span>
  <span className="flex items-center font-[500] text-[14px] md:mt-0 sm:mt-3 text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    6 People
  </span>
</div>

<div className="flex md:gap-8 sm:gap-28 md:mt-7 ml-5 sm:mt-11">
   <div className="w-[116px] h-[44px]  ">
    <h2 className="text-[20px] font-[700]">$80.00/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>

    </div> 
    <button className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">Rent Now</button>
</div>

</div>
 */}







































































<div className="w-full h- rounded-[10px] sm:hidden md:block bg-yellow-600">
  {/* Header Section */}
  <div className="flex justify-between">
    <div className="w-[128px] h-[48px] mt-5 ml-5">
      <h3 className="text-[20px] font-[700]">CR - V</h3>
      <h6 className="text-[#90A3BF]">Sport</h6>
    </div>
    <div className="w-[24px] h-[24px] mt-6 mr-4">
      <CiHeart className="text-[23px]" />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-between items-center h-40 ">
    <div className="w-52 ml-3 mt-1 ">
      <img
        className="  object-cover scale-x-[-1]"
        src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gZSk7Nk~tvBs9dnxBjysou-DvN41gqdgXJuYOvhI3g0Sz97BmZJGDHJRV0i88UAnecQWQCRTXg4mBHuxhsDbzCYXHXRyxfVAOaMeyENpfkGOWQGuolaPrb3Ugou7n4JVriw03All21Owp3fNhDK4yR2sbDcX58z72bI88EE5SBk3hkKdjXx66snKim4ei1bhF0WeNTta2Zk8EK9uAmWbAcRU03dNsCnB0Ee~761rlah0yLOK4TT9y4RKI4i7jIaRrWP~tMRKudXu~C46BGixF37QRhH9KUqs4zvp~pjcIymMaZC~XdrXiRVQEUe3nEuV1NrQsklptFVpCE~wjuVeYw__"
        alt=""
      />
    </div>

    {/* Icons Vertically After Image */}
    <div className="flex flex-col mb-4 gap-3 ml-5 mr-2 ">
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <BsFillFuelPumpFill className="text-[23px] text-[#65748c]" />
    <span className="ml-2">80L</span>
  </span>
  <span className="flex  font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <RxColorWheel className="text-[23px] text-[#65748c]" />
    <span className="ml-2">Manual</span>
  </span>
  <span className="flex font-[500] text-[14px] text-[#90A3BF] whitespace-nowrap">
    <MdPeopleAlt className="text-[23px] text-[#65748c]" />
    <span className="ml-2">6 People</span>
  </span>
</div>



  </div>

  {/* Price & Rent Button */}
  <div className="flex justify-between mr-2 gap-14 mt-7 mb-3 ml-5">
    <div className="">
      <h2 className="text-[20px] font-[700]">
        $80.00/
        <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
      </h2>
      <h2>
        {/* <del className="text-[#90A3BF] text-[14px] font-[700]">$80.00</del> */}
      </h2>
    </div>
    <button className="w-28 h-11 md:w-[116px] md:h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
      Rent Now
    </button>
  </div>
</div>




</div>

        </>
    )
}
export default Cards