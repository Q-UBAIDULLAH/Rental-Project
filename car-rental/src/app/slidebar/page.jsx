const Slidebar=()=>{

    return(
        <>
<div className="w-[239px] h-[1530px] float-left bg-[white]">
    <div className="pt-8 ml-5">
  
    <h3 className="text-[#90A3BF] tracking-widest">TYPE</h3>
   
<div className="space-x-1 mb-4 mt-4"><input className="" type="checkbox" checked/><label className="font-[500]" htmlFor=""> Sport  <span className="text-[#90a3BF]">(10)</span></label></div>
<div className="space-x-1 mb-4"><input type="checkbox" checked/><label className="font-[500]" htmlFor=""> SUV  <span className="text-[#90a3BF]">(12)</span></label></div>
<div className="space-x-1 mb-4"><input type="checkbox" /><label className="font-[500]" htmlFor=""> MPV  <span className="text-[#90a3BF]">(16)</span></label></div>
<div className="space-x-1 mb-4"><input type="checkbox" /><label className="font-[500]" htmlFor=""> Sedan <span className="text-[#90a3BF]">(20)</span></label></div>
<div className="space-x-1 mb-4 "><input className="" type="checkbox" /><label className="font-[500]" htmlFor=""> Coupe <span className="text-[#90a3BF]">(14)</span></label></div>
<div className="space-x-1"><input type="checkbox" /><label className="font-[500]" htmlFor=""> Hatchback <span className="text-[#90a3BF]">(14)</span></label></div>

    </div>


<div className="pt-8 ml-5">

    <h3 className="text-[#90A3BF] tracking-widest">CAPACITY</h3>

    <div className="space-x-1 mt-4 mb-4"><input type="checkbox"checked/> <label className="font-[500]" htmlFor="">2 Person <span className="text-[#90a3BF]">(10)</span></label></div>
    <div className="space-x-1 mb-4"><input type="checkbox" /> <label className="font-[500]" htmlFor="">4 Person <span className="text-[#90a3BF]">(14)</span></label></div>
    <div className="space-x-1 mb-4"><input type="checkbox"/> <label className="font-[500]" htmlFor="">6 Person <span className="text-[#90a3BF]">(12)</span>  </label></div>
    <div className="space-x-1"><input type="checkbox"checked/> <label className="font-[500]" htmlFor="">8 or More <span className="text-[#90a3BF]">(16)</span></label></div>
</div>

<div className="ml-5 mt-7">
<h3 className="text-[#90A3BF] tracking-widest">PRICE</h3>
<input className="w-[200px] mt-3" type="range"  min="0" max="70"/>
<p className="font-[500]">Max. $100.00</p>
</div>







</div>
<div></div>
        </>
    )
}
export default Slidebar