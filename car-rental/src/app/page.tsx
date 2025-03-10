import { client } from "@/sanity/lib/client";
import Image from "next/image";



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
  return (
  


 <div className="flex ">
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
    </div>  
    
  );
  ;
}
