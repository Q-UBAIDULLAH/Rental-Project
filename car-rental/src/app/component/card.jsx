import { IoStarSharp } from "react-icons/io5";
const Card=()=>{
return(
<div className="bg-yellow-300 w-full h-full flex flex-col  justify-center items-start  ">
<div className=" md:flex md:flex-row-reverse ">
  
<div className="rounded-xl m-4 w-72 md:w-96 pb-2 bg-orange-500 ">

<div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-   bg-slate-500">
    <h3 className="font-[700]">Rental Summary</h3>
    <p className="text-[#90A3BF] text-[11px]">Prices may change depending on the length of the rental and the price of your rental 
      car.</p>
    </div>
    <div className=""><p></p></div>
  </div>

  <div className="flex gap-6 mt-6">

<div className="w-[132px] h-[108px] bg-[#3563E9] rounded-[7px] ">
  <img className="" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nV8HMyqpegW3bZJnQKDN-3WBM7oRuiUKQpVhBFUAc5MuU12bwdZ7diKdg0112M6VWW9ZvvyNYq5jNuIUV~KtjZCNPhzCJmo6CjkF7HGYaDthKbQ3dpKhtcHT~CL3T3YYDQAgje8jmqbytpJEMrMyTQbxqJDG80QFzDk5ZBSC8jQ8c6DStiva6A9tSIjHL~gi~zszVAJo5iYyB7vzIBkmmjBJoxFqCJ9Z5cKwh5uO0W9vsRo~bkdjZ5S4Lqd-f4YwVbcZkMEvpKvNkKRzasDknFdXRFCUjwx-rU9tG0WJQ1x9mYBUQLx2uc3JRHX4RhnEyk8kABr9Hkn7vcitpjp1Qg__" alt="" />
</div>
<div >
  <p>Nissan GT - R</p>
   <div className="flex gap-[1px] mt-1">
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className=" text-[white]"> <IoStarSharp  fontSize={13}/></span>
          <h5 className="text-[11px] ml-2 mt-[-1px] font-[500]  text-[#596780]">440+ Reviewer</h5>
         
        </div>
 
</div>

  </div>
<div className="border mt-3"></div>

<div className="flex justify-between m-4">
<div className="">
  <p className="mt-">Subtotal</p>
  <p className="mt-2">Tax</p>
</div>
<div className="">
  <p className="mt-">$80.00 </p>
  <p className="mt-2">$0</p>
</div>

</div>

<div className="flex justify-between items-center  m-3 p-2 h-10 p- md:float-left md:m-0 md:w-full md:h-[45px] md:py-2 rounded-[8px] bg-slate-300">
  
  <div className="text-xs font-[500] "><p>Apply promo code</p></div>
<p className="text-sm font-semibold">Apply now</p>
</div>
<div className="flex justify-between items-center  m-3  p-2 h-10 p- md:float-left md:m-0 md:w-full md:h-[45px] md:py-2 rounded-[8px] bg-slate-300">
  
  <div className="text-xs font-[500]"><p className="text-sm font-semibold">Total Rental Price</p>
  <p>overall price rental</p></div>
<p className="text-sm font-semibold">$80.00</p>
</div>

</div>
<div className=" rounded-xl m-4 w-72 md:w-[635px] md:h-[270px]  bg-orange-500 ">


    <div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40 bg-slate-500">
    <h3 className="font-[700]">Billing Info</h3>
    <p className="text-[#90A3BF] text-[11px]">Please enter your billing info</p>
    </div>
    <div className=""><p>Step 1 of 4</p></div>
  </div>

  <div className="mt-3 pb-4 w-full  m-4 md:m-0 bg-slate-600 p-4 ">
  <div className="mt-1 pl-1.5 md:flex md:gap-6">
    <div className="flex flex-col w-full md:w-1/2">

    
  <p className="mb-1 text-white">Name</p>
<input  className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-full md:h- mt-2 md:mt-0 p-4 " placeholder="Yoyr name" type="text" />
</div>
<div className="flex flex-col w-full md:w-1/2">


<p className="mt-3 md:mt-0 md:mb-1">Phone Number</p>
<input className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-[full] md:h- mt-2 md:mt-0 p-4" placeholder="Phone number" type="text"  />
  </div>
  </div>
  <div className="mt-3 ml-1.5 md:flex md:gap-6 md:mt-5">
    <div className="flex flex-col w-full md:w-1/2">

  
  <p className="mb-1 text-white">Address</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[full] h-10 md:h- mt-2 md:mt-0 p-4" placeholder="Address" type="text" />
</div>
<div className="flex flex-col w-full md:w-1/2">


<p className="mt-3 md:mt-0 md:mb-1">Town/City</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[full] h-10 md:h- mt-2 md:mt-0 p-4" placeholder="Town or city" type="text" />
  </div>
  </div>


</div>



  </div>

  </div>
  <div className="rounded-xl m-4 w-72 md:w-2/4 bg-orange-500">

    <div className="flex justify-between  bg-orange-400 m-4 ">
      <div className="w-40 bg-slate-500">
      <h3 className="font-[700]">Rental Info</h3>
      <p className="text-[#90A3BF] text-[11px]">Please enter your billing info</p>
      </div>
      <div className=""><p>Step 2 of 4</p></div>
    </div>
<div className=" bg-slate-500 w-20 text- ml-4"><p>pick up</p></div>

<div className="md:flex md:gap-6 m-4 mt- pb- pl-1.5 bg-red-900 md:w- ">
  <div className="md:mt-5 ">

<p>Locations</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px]  mt-2">
    <option value="" >Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3 md:mt-4">Time</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="md:mt-5 mt-3">
  <p>Date</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>

<div className="bg-slate-500 w-20 text- ml-4"><p>Drop-Off</p></div>

<div className="md:flex md:gap-6 m-4 mt- pb- pl-1.5 bg-red-900">
  <div className="md:mt-5">

<p>Locations</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2">
    <option value="">Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3 md:mt-4">Time</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="mt-3 md:mt-5">
  <p>Date</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>


</div> 

<div className="rounded-xl m-4 w-72 md:w-2/4 pb-2 bg-orange-500 ">

<div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40 bg-slate-500">
    <h3 className="font-[700]">payment method</h3>
    <p className="text-[#90A3BF] text-[11px]">Please enter your  mathod</p>
    </div>
    <div className=""><p>Step 3 of 4</p></div>
  </div>
<div className="m-4  bg-slate-600">

<div className="flex justify-between m-4">
<div className=""><p>Credir Card</p></div>
<div className="">VISA</div>
</div>

<div className="mt-3 pb-4  md:flex md:gap-6 bg-yellow-800 md:m-4 ">
  <div className="mt-1 pl-1.5 md:mt-0">
  <p>Card Number</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-64 h-10 md:h- mt-2 p-4" placeholder="Yoyr name" type="text" />
<p className="mt-3 ">Card Holder</p>
<input className="bg-[#F6F7F9] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-3 pl-1.5 md:mt-0 ">
  <p className="">Expration Date</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Address" type="text" />
<p className="mt-3">CVC</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Town or city" type="text" />
  </div>


</div>



</div>

<div className="md:m-4">
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:m-0 md:w-full md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className=""><input type="radio" /><label> PayPal</label></div>
<p className="md:float-right"><img className="w-[60px] md:w-20" src="https://images.ctfassets.net/drk57q8lctrm/21FLkQ2lbOCWynXsDZvXO5/485a163f199ef7749b914e54d4dc3335/paypal-logo.webp" alt="" /></p>
</div>  
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:m-0 md:w-full md:h-[45px] md:py-2  rounded-[5px] md:mt-6 bg-slate-300">
  <div><input type="radio" /><label className=""> Bitcoin</label></div>
<p className="md:float-right"><img className="w-[67px] md:w-24" src="https://static.vecteezy.com/system/resources/previews/019/767/930/non_2x/bitcoin-logo-bitcoin-icon-transparent-free-png.png" alt="" /></p>
</div>  
</div>


</div> 


<div className="rounded-xl m-4 w-72 md:w-2/4 pb-2 bg-orange-500   md:h-[484px] md:bg-slate-600">

<div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40   bg-slate-500">
    <h3 className="font-[700]">Confirmation</h3>
    <p className="text-[#90A3BF] text-[11px]">We are getting to the end. Just few
    clicks and your rental is ready!</p>
    </div>
    <div className=""><p>Step 4 of 4</p></div>
  </div>



 
  <div className=" m-4 flex justify-center items-center  p- h-14 md:block md:float-left md:w-4/5 md:m-4 md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className="flex "><input type="checkbox" /><label className="pl-1 text-xs  "> I agree with sending an Marketing and newsletter emails. No spam, promissed!</label></div>

</div> 
  <div className=" m-4 h- p- h-14 flex justify-center items-center  md:block md:float-left md:w-4/5 md:m-4 md:mt-7 md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className="flex "><input type="checkbox" /><label className="pl-1 text-xs flex">I agree with our terms and conditions and privacy policy!</label></div>

       </div> 
    <button className="w-28 h-10 bg-[#3563E9] rounded-md text-white ml-4">Rental Now</button>
    

</div>




  </div>

)
}
export default Card