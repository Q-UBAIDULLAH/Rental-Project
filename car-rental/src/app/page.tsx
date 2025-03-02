import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Payment from './component/payment'
import Card from './component/Card'

export default async function Home() {
  const getproduct=async()=>{
    const product= await client.fetch(
      `*[_type=="car"]{
      name,
         transmission,
      "image-url":image.asset->url,
      pricePerDay,
      fuelCapacity,
      id
    
      }`
    )
    return product
      }
      const cars=await getproduct()
      console.log(cars)
  return (
  <div className="bg-yellow-300 w-full h-full flex flex-col justify-center items-center  ">
<div className=" rounded-xl m-4 w-72 bg-orange-500 ">


    <div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40 bg-slate-500">
    <h3 className="font-[700]">Billing Info</h3>
    <p className="text-[#90A3BF] text-[11px]">Please enter your billing info</p>
    </div>
    <div className=""><p>Step 1 of 4</p></div>
  </div>

  <div className="mt-3 pb-4   m-4 bg-slate-600">
  <div className="mt-1 pl-1.5">
  <p>Name</p>
<input  className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-[256px] md:h-[39px] mt-2 p-4 " placeholder="Yoyr name" type="text" />
<p className="mt-3">Phone Number</p>
<input className="bg-[#F6F7F9] rounded-[5px] h-10 md:w-[256px] md:h-[39px] mt-2 p-4" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-3 ml-1.5">
  <p >Address</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Address" type="text" />
<p className="mt-3">Town/City</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Town or city" type="text" />
  </div>


</div>

  </div>
  
  <div className="rounded-xl m-4 w-72 bg-orange-500">

    <div className="flex justify-between  bg-orange-400 m-4 ">
      <div className="w-40 bg-slate-500">
      <h3 className="font-[700]">Rental Info</h3>
      <p className="text-[#90A3BF] text-[11px]">Please enter your billing info</p>
      </div>
      <div className=""><p>Step 2 of 4</p></div>
    </div>
<div className=" bg-slate-500 w-20 text- ml-4"><p>pick up</p></div>

<div className="md:flex md:gap-6 m-4 mt- pb- pl-1.5 bg-red-900">
  <div className="md:mt-5 ">

<p>Locations</p>
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px]  mt-2">
    <option value="" >Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3">Time</p>
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="md:mt-5 mt-3">
  <p>Date</p>
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px] mt-2">
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
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px] mt-2">
    <option value="">Select your city</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  <p className="mt-3">Time</p>
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px] mt-2">
    <option value="">Select your time</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
  
  <div className="mt-3">
  <p>Date</p>
  <select className="w-60 h-10 md:w-[256px] md:h-[39px] rounded-[5px] mt-2">
    <option value="">Select your date</option>
    <option value="">KARACHI</option>
    <option value="">LAHORE</option>
    <option value="">ISLAMABAD</option>
  </select>
  </div>
 
</div>


</div> 

<div className="rounded-xl m-4 w-72 pb-2 bg-orange-500 ">

<div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40 bg-slate-500">
    <h3 className="font-[700]">payment method</h3>
    <p className="text-[#90A3BF] text-[11px]">Please enter your  mathod</p>
    </div>
    <div className=""><p>Step 3 of 4</p></div>
  </div>
<div className="m-4 bg-slate-600">

<div className="flex justify-between">
<div className=""><p>Credir Card</p></div>
<div className="">VISA</div>
</div>

<div className="mt-3 pb-4  md:flex md:gap-6 ">
  <div className="mt-1 pl-1.5 ">
  <p>Card Number</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Yoyr name" type="text" />
<p className="mt-3">Card Holder</p>
<input className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Phone number" type="text"  />
  </div>
  <div className="mt-3 pl-1.5">
  <p >Expration Date</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Address" type="text" />
<p className="mt-3">CVC</p>
<input  className="bg-[#F6F7F9] rounded-[5px] md:w-[256px] h-10 md:h-[39px] mt-2 p-4" placeholder="Town or city" type="text" />
  </div>


</div>



</div>

<div className="">
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:w-[804px] md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className=""><input type="radio" /><label> PayPal</label></div>
<p className="md:float-right">PAYPAL</p>
</div>  
<div className="flex justify-between items-center m-4 h- p-2 md:float-left md:w-[804px] md:h-[45px] md:py-2  rounded-[5px] md:mt-6 bg-slate-300">
  <div><input type="radio" /><label className=""> Bitcoin</label></div>
<p className="md:float-right">BITCOIN</p>
</div>  
</div>


</div> 


<div className="rounded-xl m-4 w-72 pb-2 bg-orange-500  md:w-[852px] md:h-[484px] md:bg-slate-600">

<div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40   bg-slate-500">
    <h3 className="font-[700]">Confirmation</h3>
    <p className="text-[#90A3BF] text-[11px]">We are getting to the end. Just few
    clicks and your rental is ready!</p>
    </div>
    <div className=""><p>Step 4 of 4</p></div>
  </div>



 
  <div className=" m-4 flex justify-center items-center  p- h-14 md:float-left md:w-[804px] md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className="flex "><input type="checkbox" /><label className="pl-1 text-xs  "> I agree with sending an Marketing and newsletter emails. No spam, promissed!</label></div>

</div> 
  <div className=" m-4 h- p- h-14 flex justify-center items-center  md:float-left md:w-[804px] md:h-[45px] md:py-2 rounded-[5px] bg-slate-300">
  
  <div className="flex "><input type="checkbox" /><label className="pl-1 text-xs flex">I agree with our terms and conditions and privacy policy!</label></div>

       </div> 
    <button className="w-28 h-10 bg-[#3563E9] rounded-md text-white ml-4">Rental Now</button>

</div>


<div className="rounded-xl m-4 w-72 pb-2 bg-orange-500 ">

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

<div className="flex justify-between items-center  m-3 p-2 h-10 p- md:float-left md:w-[804px] md:h-[45px] md:py-2 rounded-[8px] bg-slate-300">
  
  <div className="text-xs font-[500]"><p>Apply promo code</p></div>
<p className="text-sm font-semibold">Apply now</p>
</div>
<div className="flex justify-between items-center  m-3 p-2 h-10 p- md:float-left md:w-[804px] md:h-[45px] md:py-2 rounded-[8px] bg-slate-300">
  
  <div className="text-xs font-[500]"><p className="text-sm font-semibold">Total Rental Price</p>
  <p>overall price rental</p></div>
<p className="text-sm font-semibold">$80.00</p>
</div>

</div>

  </div>



/* <div className="flex ">
  {
    cars.map((item:any)=>{
return(

  <div className="bg-amber-400 ">
    <div className="flex">
        <div className="w-60 h-44 m-4 bg-gray-600 ">
<div>{item.name}</div>
<div><img className="w-full h-20 " src={item['image-url']} alt="" /></div>
<div>{item.transmission}</div>
<div>{item.pricePerDay}</div>
<div>{item.fuelCapacity}</div>
<div>{item.id}</div>
</div>

        </div>
        </div>
      )
    })
  }
    </div>  */
    
  );
  ;
}
