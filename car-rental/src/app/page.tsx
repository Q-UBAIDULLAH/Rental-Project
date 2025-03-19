import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Adds from "./adds/page";
import Cards from './cards/page';
import Popular from './popular/page';
import Recommend from './recommend/page';
import Pick_Drop from './pickdrop/page';
import Card from "../app/component/card"


export default async function Home() {
  const getproduct=async()=>{
    const product= await client.fetch(
      `*[_type=="car"]{
      name,
         transmission,
      "image-url":image.asset->url,
      pricePerDay,
      fuelCapacity,
      id,
      tags[0]
    
      }`
    )
    return product
      }
      const cars=await getproduct()
      console.log(cars)
  return (<>
<div className="bg-[#F6F7F9]">

<Card/>
{/* <Adds></Adds>
<Pick_Drop></Pick_Drop>
<Popular></Popular>
<Recommend></Recommend> */}
{/* <Pick_Drop></Pick_Drop>
<Popular></Popular>
<Recommend></Recommend> */}

</div>
  
  


 {/* <div className="flex ">
   {
    cars.map((item:any)=>{
 return(

   <div className="bg-amber-400 ">
     <div className="flex">
         <div className="w-60 h-44 m-4 bg-gray-600 ">
           <div className="text-red-700">{item.tags}</div>
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
     </div>   */}
    
     </>);
  ;
}
