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
  <div className="bg-yellow-300 w-full h-full  ">
<div className=" rounded-xl m-4 w-72 bg-orange-500 ">


    <div className="flex justify-between  bg-orange-400 m-4 ">
    <div className="w-40 bg-slate-500">
    <h3 className="font-[700]">Billing Info</h3>
    <p className="text-[#90A3BF] text-[11px]">Please enter your billing info</p>
    </div>
    <div className=""><p>Step 1 of 4</p></div>
  </div>

  <div className="mt-3 pb-4   m-4 bg-slate-600">
  <div className="mt-1 ml-1.5">
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
