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


        <div className="flex   gap-4 bg-black md:gap-[14px] sm:gap-2 mt-8 overflow-x-scroll no-scrollbar w-full">

{/* bg-zinc-400 */}
<div className="w-72 h-80 md:h-[380px] sm:w-70 sm:h-96  rounded-[10px]  bg-violet-600">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[20px] font-[700]">Koenigsegg</h3>
<h6 className="text-[#90A3BF]">sport</h6>
</div>

<div className="w-[24px] h-[24px] mt-6 mr-4">
<FcLike className="text-[21px] "/>
</div>

</div>

{/* bg-black */}

<div className="w-64 h-32 p-2 ml-2 mr-2   mt-3 bg-black flex justify-center items-center">
  <img className="w-full h-full object-cover" 
       src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aXPA~bTK8ua6bnZ4uVF0J~JEu88j6x89WVM1Jiw~3FF0A71z0FrdEmLjNy16w5vsGMmU4f1vWTzY~slQOU0plpbOsDizXuwtqK71IMnNsPTYrEZHy6~BkQwKYDlpJE~FdWCzqcqUaNKQUSO7DzmIwPzpsvr7vCdI86TWP4aMkdpIjTdvx7Li9VtFNEuUEydQVxVCJ9~uxswayhhNKEFMpELGb3U2ovfGASUvmf5FsHmfCAOD~rot1v1Mw8MQXZ7UvNq0wCPyAWnFzCJLlpdiR64gAuTHaKueoyxRhTkIiRIxY6uYoybhTHgIAdmKDecAFsBlekITURwPuLwpQYaHYQ__" 
       alt="Car" />
</div>



<div className="flex gap-4 mt-2 ml-3   md:ml-5 sm:ml-2">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    90L
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    Manual
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    2 People
  </span>
</div>
{/* bg-zinc-900 */}
<div className="flex gap-4 mt-7 ml-4   ">
   <div className="w-[116px] h-[44px]   ">
    <h2 className="text-[20px] font-[700] ">$99.00/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>
    </div> 
    <button className="w-[116px] h-[43px]  rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">Rent Now</button>
</div>

</div>







<div className="w-72 h-80 md:w-[296px] md:h-[380px] sm:w-70 sm:h-96  rounded-[10px]   md:block bg-red-700">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[20px] font-[700]">Nissan GT-R</h3>
<h6 className="text-[#90A3BF]">sport</h6>
</div>

<div className="w-[24px] h-[24px] mt-6 mr-4">
<CiHeart className="text-[23px]"/>
</div>

</div>

{/* bg-black */}
{/* <div className="w-64 h-32 ml-3 mt-3  bg-black">
<img className="object-cover mirror-x or scale-x-[-1] " src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kO2EcPzOZTEzeHm2U995JmDNxz-tJiUNrBRumloUxtMujDZDz0g8pNhc61UiUPILuT4AOCijvg3a1DnaxZ49KMg0J-hWV~42oFPEED8u8MKvJdWGYKCJ9IyvZBhrOhHPguUamiHp6kCbcuawVTC6Qw8Nit0yQFLIkDhuSk4B26bJRlKMr-mUWMr8lECu8oB4HJE2OaqRE2EekkU5An7g1hOOm11q0fuIXnWyfCnGaCUre3BZKD33PpShx3V5VMBwCK9CXi~f9oGLZKRA50CaoRKDbIzsK3C0mQmLvHI-5aMC9sCbva9RoYowB6fQdu9I5FT7oobJ54I1hMDevHmrRA__" alt="" />
</div> */}
<div className="w-64 h-32 p-2 ml-2 mr-2 mt-3 bg-black flex justify-center items-center">
  <img className="object-cover mirror-x or scale-x-[-1]" 
       src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uKAeYhmPQNzih2Z9D5nhxaxCJiAR5Fy6R-7~FQSob~2KHO9yArnpOKnBQRI0kSUo3QV-aa50CqO6OkabI1Bq0tQ-Cj8pe8BABv~5auiNMRaUz4FPovsF89d1wj2W5ufAYz9t0NKOdoVLw0-5yWJY8yC4j-EaN7nWtYCQWC4JbFxZTkYBJZqVfw9ydL0Qoxq69O0ocxP3jMw2ihPmbYHnjX6fmRU3lc-CcfelKGMW1Ym80MSUege0YPEfHhCnKzxZLoKm20cDkcD~wUOCaWQ22wpJkXZN0o-DAwmgBPS5vq7CslUjtC~WZt3Tj3hMr2rAE5Kgn0x8NwXzVD6yphgdOg__" 
       alt="Car" />
</div>


<div className="flex gap-4 mt-2 ml-3   md:ml-5 sm:ml-2">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    90L
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    Manual
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    2 People
  </span>
</div>
{/* bg-zinc-900 */}
<div className="flex gap-4 mt-7 ml-4 ">
   <div className="w-[116px] h-[44px]  ">
    <h2 className="text-[20px] font-[700]">$99.00/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>
    <h2> <del className="text-[#90A3BF] text-[14px] font-[700]"> $100.00</del></h2>
    </div> 
    <button className="w-[116px] h-[43px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">Rent Now</button>
</div>

</div>





<div className="w-72 h-80 rounded-[10px] sm:hidden md:block bg-[#545a58]">


<div className="flex justify-between ">


<div className="w-[128px] h-[48px] mt-5 ml-5">
<h3 className="text-[20px] font-[700]">Rolls - Royce</h3>
<h6 className="text-[#90A3BF]">Sedan</h6>
</div>

<div className="w-[24px] h-[24px] mt-6 mr-4">
<FcLike className="text-[21px] "/>
</div>

</div>

{/* bg-black */}
<div className=" w-64 h-32  p-2 ml-2 mr-2 mt-3  bg-black flex justify-center items-center">
<img className="https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UE2tr~BPL9yvDHenmcrWnn9GJXIEQ3m6bmzkUejqmqS-CazRiGtC2wuZYUbtAiDno9BkswY3dIJBc9JNpEqVyTbA~ec8G4inGaGhNthYvvcaa8jVujFTmpP2iJnSDGn6teVEIf05Pa~ijFFTgyY7LW7KtCVtM~zvpzrw2b8aQNX~6cZm0U4VFGRhCDCayDGA7N85~HrCLcx7EhE9~2WymoL615Mkz1~nZqaZ-GJTiuLUxBgmuprO3WMzjFiViuwRIX2gDjEKyuTLUQBENVcr~5ghV24wV2eG2~bn8ZYTX1uUsj2xyBPYv3qmdw~qwrPgu3WKJ5bELI27Llciv77jVA__" />
</div>


<div className="flex gap-4 mt-2 ml-3   md:ml-5 sm:ml-2">
  <span class="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <BsFillFuelPumpFill class="mr-2 text-[23px] text-[#65748c]"/>
    90L
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <RxColorWheel  class="mr-2 text-[23px] text-[#65748c]" />
    Manual
  </span>
  <span className="flex items-center font-[500] text-[14px] text-[#90A3BF]">
    <MdPeopleAlt class="mr-2 text-[23px] text-[#65748c]" />
    2 People
  </span>
</div>
{/* bg-zinc-900 */}
<div className="flex gap-4 mt-7 ml-4 ">
   <div className="w-[116px] h-[44px]  ">
    <h2 className="text-[20px] font-[700]">$99.00/<span className="text-[14px] font-[700] text-[#90A3BF]">day</span></h2>
    </div> 
    <button className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">Rent Now</button>
</div>

</div>


<div className="w-full h- rounded-[10px] sm:hidden md:block bg-[#40c24f]">
  {/* Header Section */}
  <div className="flex justify-between">
    <div className="w-[128px] h-[48px] mt-5 ml-5">
      <h3 className="text-[20px] font-[700]">Nissan GT-R</h3>
      <h6 className="text-[#90A3BF]">Sport</h6>
    </div>
    <div className="w-[24px] h-[24px] mt-6 mr-4">
      <CiHeart className="text-[23px]" />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex  justify-between items-center">
    <div className="w-52 ml-3 mt-1 ">
      <img
        className="  object-cover scale-x-[-1]"
        src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uKAeYhmPQNzih2Z9D5nhxaxCJiAR5Fy6R-7~FQSob~2KHO9yArnpOKnBQRI0kSUo3QV-aa50CqO6OkabI1Bq0tQ-Cj8pe8BABv~5auiNMRaUz4FPovsF89d1wj2W5ufAYz9t0NKOdoVLw0-5yWJY8yC4j-EaN7nWtYCQWC4JbFxZTkYBJZqVfw9ydL0Qoxq69O0ocxP3jMw2ihPmbYHnjX6fmRU3lc-CcfelKGMW1Ym80MSUege0YPEfHhCnKzxZLoKm20cDkcD~wUOCaWQ22wpJkXZN0o-DAwmgBPS5vq7CslUjtC~WZt3Tj3hMr2rAE5Kgn0x8NwXzVD6yphgdOg__"
        alt=""
      />
    </div>

    {/* Icons Vertically After Image */}
    <div className="flex flex-col gap-3 ml-5 mr-2 ">
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
    <span className="ml-2">2 People</span>
  </span>
</div>



  </div>

  {/* Price & Rent Button */}
  <div className="flex justify-between mr-2 gap-14 mt-7 ml-5">
    <div className="">
      <h2 className="text-[20px] font-[700]">
        $99.00/
        <span className="text-[14px] font-[700] text-[#90A3BF]">day</span>
      </h2>
      <h2>
        <del className="text-[#90A3BF] text-[14px] font-[700]">$100.00</del>
      </h2>
    </div>
    <button className="w-28 h-11 md:w-[116px] md:h-[44px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF]">
      Rent Now
    </button>
  </div>
</div>


</div>
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
        src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8y7isRNpWfNgLQ-gzCy9k2pMF4at~WqcrOw5b9RzcKOpl5Xx5Kd2F-o4Y9jdgxjUqvI7IfieftZ~~S1YPbQzmiz0BdAGzmYiyVjaXRB~jrwxULX~qKSkjBmnhbL8PDvUayTFxYVATY-gJU~muyFRlD~Az70kEkEABs5e0agkMFvjFavRaNkbBkafYbDVO7-5BMHcDYamaYPv9WTcRtYTu5aC7QQd4RQC1yuF3zDHjQKBrrKvRsDj~pLjZqARMqXxSqQ8FjOrX9OsFjKxa9EcPNHIAfaIun00Od8gE6Oa0HLfzSLjBTcL9rtFGXFu2jEw82dCXHQP46yI6Sp9yIw7Q__"
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
        src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SzB2eiiLfzCVXqbeJf4hn-I076JwH2nVfh2rfPetPvzhqkIxgqgxaTZ7WeELmqt33LxToYwyj4QrMNq57j0PobrOm-CVj~yNe4Mj9B7XZB1iwSpSRKQTAx2PfRf3ZBQx628Pk-kQQ4YoqyojzIdmUQloXGgDEyyD8g04o9AzW~enZHJis9rQQ7M5xyqor6L7e1U9lufQpDhe~oQpXuadTTm0OPfafOblWu2ee4B0IiMF3e9H35J0HSyJfN3iZ1F0xqOae5o~MBSAIafnQR9OjLJ22Edn~bZXPkLI-BdCgrga-ZpKe36~q3KDmo1TLcOx5gujAile-8xEI1VhwnSeVQ__"
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
        src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ALW5yiAuwJSYMRD4KKBREk5XJaFssJK88edZYIztwdOi4dOo6z8DaWRP0FKffoxrpuQT5mTufGoLy51aUfD-TTy0of1g7SlmL3r1PX0K3ecZAIxIS0PJz85nifJZMdzK3ZyEARq2HsBQ2RggeC029grQHnGNQPdra~AIuyl3DxjkwdPs0bn6v~5~XN8wsgiQgyCAmoyujPPDBh7T12cAha~sArENLFOhnxNLCgU79aaukBq0gNFn08BFFgzU4AT~1IXLtp1ef1hqhvxowxzxN-unuyzRTlDV-knFYj0I-Cph33rnJ8XSAwUQ1IHUrioAci8cRykaMUFM9J26WN-uWQ__"
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
        src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SzB2eiiLfzCVXqbeJf4hn-I076JwH2nVfh2rfPetPvzhqkIxgqgxaTZ7WeELmqt33LxToYwyj4QrMNq57j0PobrOm-CVj~yNe4Mj9B7XZB1iwSpSRKQTAx2PfRf3ZBQx628Pk-kQQ4YoqyojzIdmUQloXGgDEyyD8g04o9AzW~enZHJis9rQQ7M5xyqor6L7e1U9lufQpDhe~oQpXuadTTm0OPfafOblWu2ee4B0IiMF3e9H35J0HSyJfN3iZ1F0xqOae5o~MBSAIafnQR9OjLJ22Edn~bZXPkLI-BdCgrga-ZpKe36~q3KDmo1TLcOx5gujAile-8xEI1VhwnSeVQ__"
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