import { IoStarSharp } from "react-icons/io5";
import { IoIosRadioButtonOn } from "react-icons/io";
const Card=()=>{
return(
<div className="bg-[#F6F7F9] w-full h-full flex flex-col  justify-center items-start md:items-center  ">
<div className=" md:flex md:flex-row-reverse ">
  
<div className="rounded-xl m-4 w-72 md:w-96 pb-2 bg-[#FFFFFF] ">

<div className="flex justify-between   m-4 ">
    <div className="w-   ">
    <h3 className="font-[700]">Rental Summary</h3>
    <p className="text-[#90A3BF] text-[11px] md:text-sm">Prices may change depending on the length of the rental and the price of your rental 
      car.</p>
    </div>
    <div className=""><p></p></div>
  </div>

  <div className="flex gap-6 mt-6 md:-mt-4 md:gap-0">

<div className="w-[132px] h-[108px] bg-[#3563E9] rounded-[7px] md:m-4">
  <img className="mirror-x or scale-x-[-1]" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nV8HMyqpegW3bZJnQKDN-3WBM7oRuiUKQpVhBFUAc5MuU12bwdZ7diKdg0112M6VWW9ZvvyNYq5jNuIUV~KtjZCNPhzCJmo6CjkF7HGYaDthKbQ3dpKhtcHT~CL3T3YYDQAgje8jmqbytpJEMrMyTQbxqJDG80QFzDk5ZBSC8jQ8c6DStiva6A9tSIjHL~gi~zszVAJo5iYyB7vzIBkmmjBJoxFqCJ9Z5cKwh5uO0W9vsRo~bkdjZ5S4Lqd-f4YwVbcZkMEvpKvNkKRzasDknFdXRFCUjwx-rU9tG0WJQ1x9mYBUQLx2uc3JRHX4RhnEyk8kABr9Hkn7vcitpjp1Qg__" alt="" />
</div>
<div className="md:w-40 md:h-11 md:mt-9  ">
  <p className="font-extrabold text-lg">Nissan GT - R</p>
   <div className="flex  gap-[1px] mt-1">
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={13}/></span>
          <span className=" text-[white]"> <IoStarSharp  fontSize={13}/></span>
          <h5 className="text-[11px] ml-2 mt-[-1px] font-[500] md:ml-0 text-[#596780]">440+ Reviewer</h5>
         
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
  <p className="mt-2 md:text-end">$0</p>
</div>

</div>

<div className="flex justify-between items-center  m-3   p-2 h-10 p- md:float-left md:m-0 md:ml-4  md:w-11/12 md:h-[45px] md:py-2 rounded-[8px] bg-[#F6F7F9]">
  
  <div className="text-xs font-[500] "><p>Apply promo code</p></div>
<p className="text-sm font-semibold">Apply now</p>
</div>
<div className="flex justify-between items-center  m-3  p-2 h-10 p- md:float-left md:m-0 md:ml-4 md:w-11/12 md:h-[45px] md:py-2 md:mt-1 rounded-[8px] ">
  
  <div className=" font-[500] "><p className="text-xl font-semibold">Total Rental Price</p>
  <p className="text-xs text-[#90A3BF]">Overall price and includes rental discount</p></div>
<p className="text-lg font-semibold">$80.00</p>
</div>

</div>
<div className=" rounded-xl m-4 w-72 md:w-[635px] md:h-[270px]  bg-[#FFFFFF] ">


    <div className="flex justify-between   m-4 ">
    <div className="w-40 md:w-48 ">
    <h3 className="font-[700]">Billing Info</h3>
    <p className="text-[#90A3BF] text-[11px] md:text-sm">Please enter your billing info</p>
    </div>
    <div className="text-[#90A3BF]  md:text-sm"><p>Step 1 of 4</p></div>
  </div>

  <div className="mt-3 pb-4 w-full  m-4 md:m-0  p-4 ">
  <div className="mt-1 pl-1.5 md:flex md:gap-6">
    <div className="flex flex-col w-full md:w-1/2">

    
  <p className="mb-1 ">Name</p>
<input  className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-full md:h- mt-2 md:mt-0 p-4 " placeholder="Yoyr name" type="text" />
</div>
<div className="flex flex-col w-full md:w-1/2">


<p className="mt-3 md:mt-0 md:mb-1">Phone Number</p>
<input className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-[full] md:h- mt-2 md:mt-0 p-4" placeholder="Phone number" type="text"  />
  </div>
  </div>
  <div className="mt-3 ml-1.5 md:flex md:gap-6 md:mt-5">
    <div className="flex flex-col w-full md:w-1/2">

  
  <p className="mb-1 ">Address</p>
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
  <div className="rounded-xl m-4 w-72 md:w-2/4  bg-[#FFFFFF] md:relative md:bottom-40 md:right-52">

    <div className="flex justify-between   m-4 ">
      <div className="w-40 md:w-52 ">
      <h3 className="font-[700]">Rental Info</h3>
      <p className="text-[#90A3BF] text-[11px] md:text-sm">Please select your rental date</p>
      </div>
      <div className="text-[#90A3BF]  md:text-sm"><p>Step 2 of 4</p></div>
    </div>
<div className=" w-20 text- ml-4 flex items-center gap-2 mb-4">
   <IoIosRadioButtonOn className="text-[#3563E9]" />
  <p>pick up</p></div>

<div className="md:flex md:gap-6 m-4 mt- pb- pl-1.5  md:w- ">
  <div className="md:mt-3 ">

<p>Locations</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] bg-[#F6F7F9] mt-2">
    <option value="" >Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3 md:mt-4">Time</p>
  <select className="w-60 h-10 md:w-64 md:h-[] bg-[#F6F7F9] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="md:mt-3 mt-3">
  <p>Date</p>
  <select className="w-60 h-10 md:w-64 md:h-[] bg-[#F6F7F9] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>

<div className=" w-24 text- ml-4 flex items-center gap-2 mb-4 ">
<IoIosRadioButtonOn className="text-[#5CAFFC]" />
  <p>Drop-Off</p></div>

<div className="md:flex md:gap-6 m-4 mt- pb- pl-1.5 ">
  <div className="md:mt-3">

<p>Locations</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2 bg-[#F6F7F9]">
    <option value="">Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3 md:mt-4">Time</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2 bg-[#F6F7F9]">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="mt-3 md:mt-3">
  <p>Date</p>
  <select className="w-60 h-10 md:w-64 md:h-[] rounded-[5px] mt-2 bg-[#F6F7F9]">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>


</div> 

<div className="rounded-xl m-4 w-72 md:w-2/4 pb-2 bg-[#FFFFFF] md:relative md:bottom-40 md:right-52">

<div className="flex justify-between   m-4 ">
    <div className="w-40 md:w-60 ">
    <h3 className="font-[700]">Payment Method</h3>
    <p className="text-[#90A3BF] text-[11px] md:text-sm">Please enter your payment method</p>
    </div>
    <div className="text-[#90A3BF]  md:text-sm"><p>Step 3 of 4</p></div>
  </div>
<div className="m-4  bg-[#F6F7F9]">

<div className="flex justify-between m-4">
<div className="flex items-center gap-2 mb-4">
<IoIosRadioButtonOn className="text-[#3563E9]" />
  <p>Credir Card</p></div>
<div className=""><img className="w-20" src="https://getsby.com/wp-content/uploads/2023/01/Visa-Mastercard-1-1024x378.png" alt="" /></div>
</div>

<div className="mt-3 pb-4  md:flex md:gap-6  md:m-4 ">
  <div className="mt-1 pl-1.5 md:mt-0">
  <p>Card Number</p>
<input  className="bg-[#FFFFFF] rounded-[5px] md:w-64 h-10 md:h- mt-2 p-4" placeholder="Yoyr name" type="text" />
<p className="mt-3 ">Card Holder</p>
<input className="bg-[#FFFFFF] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-3 pl-1.5 md:mt-0 ">
  <p className="">Expration Date</p>
<input  className="bg-[#FFFFFF] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Address" type="text" />
<p className="mt-3">CVC</p>
<input  className="bg-[#FFFFFF] rounded-[5px] md:w-64 h-10 md:h-[] mt-2 p-4" placeholder="Town or city" type="text" />
  </div>


</div>



</div>

<div className="md:m-4">
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:m-0 md:w-full md:h-[45px] md:py-2 rounded-[5px] bg-[#F6F7F9]">
  
  <div className=""><input type="radio" /><label> PayPal</label></div>
<p className="md:float-right"><img className="w-[60px] md:w-20" src="https://images.ctfassets.net/drk57q8lctrm/21FLkQ2lbOCWynXsDZvXO5/485a163f199ef7749b914e54d4dc3335/paypal-logo.webp" alt="" /></p>
</div>  
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:m-0 md:w-full md:h-[45px] md:py-2  rounded-[5px] md:mt-6 bg-[#F6F7F9]">
  <div><input type="radio" /><label className=""> Bitcoin</label></div>
<p className="md:float-right"><img className="w-[67px] md:w-24" src="https://static.vecteezy.com/system/resources/previews/019/767/930/non_2x/bitcoin-logo-bitcoin-icon-transparent-free-png.png" alt="" /></p>
</div>  
</div>


</div> 


<div className="rounded-xl m-4 w-72 md:w-2/4  pb-2 bg-[#FFFFFF]   md:h-[] md:bg-[#FFFFFF] md:relative md:bottom-40 md:right-52">

<div className="flex justify-between   m-4 ">
    <div className="w-40 md:w-96   ">
    <h3 className="font-[700]">Confirmation</h3>
    <p className="text-[#90A3BF] text-[11px] md:text-sm">We are getting to the end. Just few
    clicks and your rental is ready!</p>
    </div>
    <div className="text-[#90A3BF] md:text-sm"><p>Step 4 of 4</p></div>
  </div>



 
  <div className=" m-4 flex justify-center items-center  p- h-14 md:block md:float-left md:w-11/12 md:mt-1 md:m-4 md:h-[45px] md:py-2 rounded-[5px] bg-[#F6F7F9]">
  
  <div className="flex md:pt-1 md:pl-3 ml-1"><input type="checkbox" /><label className="pl-2 text-xs md:text-sm font-medium"> I agree with sending an Marketing and newsletter emails. No spam, promissed!</label></div>

</div> 
  <div className=" m-4 h- p- h-14 flex justify-center items-center  md:block md:float-left md:w-11/12 md:m-4 md:mt-1  md:h-[45px] md:py-2 rounded-[5px] bg-[#F6F7F9]">
  
  <div className="flex md:pt-1 md:pl-3 ml-1"><input type="checkbox" /><label className="pl-2 text-xs md:text-sm flex font-medium">I agree with our terms and conditions and privacy policy!</label></div>

       </div> 
    <button className="w-28 h-10 bg-[#3563E9] rounded-md text-white ml-4">Rental Now</button>
  

<div className=" m-4 md:w-3/4  md:m-4">
<div><img className="w-7 md:w-10 md:h-10" src="https://thumbs.dreamstime.com/b/tick-shield-security-icon-black-white-tick-shield-security-icon-white-vector-illustration-isolated-117564073.jpg" alt="" /></div>
  <h2>All your data are safe</h2>
  <p className="text-xs text-[#90A3BF]">We are using the most advanced security to provide you the best experience ever.</p>
</div>
</div>




  </div>

)
}
export default Card