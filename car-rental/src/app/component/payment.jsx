const Payment=()=>{
    return(
        // md:w-[1440px] md:h-[2240px] bg-orange-500 flex
        <div className="">

{/* w-[852px] h-[2176px] bg-amber-800 */}
<div className="bg-yellow-300 ">


<div className="md:w-[852px] md:h-[336px] w-full  bg-slate-700">

  <div className="md:w-[192px] md:h-[48px] ">
    <div>
    <h3 className="font-[700]">Billing Info</h3>
    <p className="text-[#90A3BF] text-[7px]">Please enter your billing info</p>
    </div>
    <div className=""><p>Step 1 of 4</p></div>
  </div>


<div className="">
  <div className="mt-1 ">
  <p>Name</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] md:h-[39px] md:mt-2" placeholder="Yoyr name" type="text" />
<p className="mt-4">Phone Number</p>
<input className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] md:h-[39px] md:mt-2" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-1">
  <p >Address</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] md:h-[39px] md:mt-2" placeholder="Address" type="text" />
<p className="mt-4">Town/City</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] md:h-[39px] md:mt-2" placeholder="Town or city" type="text" />
  </div>


</div>

</div>
{/* 
<div className="w-[852px] h-[664px] bg-slate-600">

<div className="w-[192px] h-[48px] bg-red-700 float-left">
<h3 className="font-[700]">Rental Info</h3>
<p className="text-[#90A3BF] text-[13px]">Please select your rental date</p>
  </div>
  <div className="float-right mr-5 mt-5"><p>Step 2 of 4</p></div>
<div className="clear-both"><p>pick up</p></div>

<div className="flex gap-6 mt-6 ml-4">
  <div className="mt-5">

<p>Locations</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-4">Time</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="mt-5">
  <p>Date</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>

<div className="mt-5"><p>Drop-Off</p></div>

<div className="flex gap-6 mt-6 ml-4">
  <div className="mt-5">

<p>Locations</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-4">Time</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="mt-5">
  <p>Date</p>
  <select className="w-[256px] h-[39px] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>


</div> */}










{/* <div className="w-[852px] h-[596px]   bg-zinc-700">

<div className="w-[217px] h-[48px]  bg-red-700 float-left">
<h3 className="font-[700]">Payment Method</h3>
<p className="text-[#90A3BF] text-[13px]">Please enter your payment method</p>
  </div>
  <div className="float-right mr-5 mt-5"><p>Step 3 of 4</p></div>
<div className="clear-both"></div>
<div className=" w-[804px] h-[308px] mt-3  bg-slate-500">

<div className="float-left"><p>Credir Card</p></div>
<div className="float-right">VISA</div>
<div className="clear-both"></div>

<div className="  flex gap-6 mt-6 ml-4">
  <div className="mt-5 ">
  <p>Card Number</p>
<input  className="bg-[#F6F7F9] rounded-[5px] w-[256px] h-[39px] mt-2" placeholder="Yoyr name" type="text" />
<p className="mt-4">Card Holder</p>
<input className="bg-[#F6F7F9] rounded-[5px] w-[256px] h-[39px] mt-2" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-5">
  <p >Expration Date</p>
<input  className="bg-[#F6F7F9] rounded-[5px] w-[256px] h-[39px] mt-2" placeholder="Address" type="text" />
<p className="mt-4">CVC</p>
<input  className="bg-[#F6F7F9] rounded-[5px] w-[256px] h-[39px] mt-2" placeholder="Town or city" type="text" />
  </div>


</div>



</div>

<div>

<div className="float-left w-[804px] h-[45px] py-2 rounded-[5px] bg-slate-300">
  <input type="radio" /><label> PayPal</label>
<p className="float-right">PAYPAL</p>
</div>  
<div className="float-left w-[804px] h-[45px] py-2  rounded-[5px] mt-6 bg-slate-300">
  <input type="radio" /><label className=""> Bitcoin</label>
<p className="float-right">BITCOIN</p>
</div>  

</div>

</div> */}

{/* <div className="w-[852px] h-[484px] bg-slate-600">

<div className="w-[407px] h-[48px]  bg-red-700 float-left">
<h3 className="font-[700]">Confirmation</h3>
<p className="text-[#90A3BF] text-[13px]">We are getting to the end. Just few clicks and your rental is ready!</p>
  </div>
  <div className="float-right mr-5 mt-5"><p>Step 4 of 4</p></div>
  <div className="clear-both"></div>

  <div className="w-[804px] h-[45px] py-2  rounded-[5px] mt-6 bg-slate-300">

    <input className="" type="checkbox" name="" id="" /><label className="text-[px]" htmlFor="">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
       </div>
       <div  className="w-[804px] h-[45px] py-2  rounded-[5px] mt-6 bg-slate-300">
    <input type="checkbox" name="" id="" /><label className="text-[px]" htmlFor="">I agree with our terms and conditions and privacy policy.</label>
    </div>
    <button className="w-[130px] h-[50px] bg-[#3563E9] rounded-[10px] mt-8">Rent Now</button>

</div> */}

</div>

{/* <div className="w-[492px] h-[560px] bg-yellow-200">

<div className="w-[427px] h-[48px]  bg-red-700 ">
<h3 className="font-[700]">Rental Summary</h3>
<p className="text-[#90A3BF] text-[13px]">Prices may change depending on the length of the rental and the price of your rental car.</p>
  </div>

  <div className="flex gap-6 mt-6">

<div className="w-[132px] h-[108px] bg-[#3563E9] rounded-[7px] ">
  <img className="" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nV8HMyqpegW3bZJnQKDN-3WBM7oRuiUKQpVhBFUAc5MuU12bwdZ7diKdg0112M6VWW9ZvvyNYq5jNuIUV~KtjZCNPhzCJmo6CjkF7HGYaDthKbQ3dpKhtcHT~CL3T3YYDQAgje8jmqbytpJEMrMyTQbxqJDG80QFzDk5ZBSC8jQ8c6DStiva6A9tSIjHL~gi~zszVAJo5iYyB7vzIBkmmjBJoxFqCJ9Z5cKwh5uO0W9vsRo~bkdjZ5S4Lqd-f4YwVbcZkMEvpKvNkKRzasDknFdXRFCUjwx-rU9tG0WJQ1x9mYBUQLx2uc3JRHX4RhnEyk8kABr9Hkn7vcitpjp1Qg__" alt="" />
</div>
<div >
  <p>Nissan GT - R</p>
 
</div>

  </div>

<div className="flex justify-between">
<div>
  <p className="mt-6">Subtotal</p>
  <p className="mt-6">Tax</p>
</div>
<div className="">
  <p className="mt-6">$80.00 </p>
  <p className="mt-6">$0</p>
</div>

</div>

</div> */}

    </div>
    )
}
export default Payment