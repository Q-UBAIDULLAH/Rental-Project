const Footer=()=>{
    return(
        <>
 {/* flex justify-between */}
 {/* md:w-[1343px] h-[400px] */}
<div className="md:w-full h-[] mt-10  bg-white">


<div className=" md:flex sm:flex-none justify-between">

<div className="w-[292px] h-[108px] ml-12 md:mt-12 sm:mt-4 ">
    <h2 className="font-[600] text-[32px] text-[#3563E9]">MORENT</h2>
<p className="text-[17px] font-[400] text-[#90A3BF] mt-2">Our vision is to provide convenience and help increase your sales business.</p>
</div>

<div className="flex gap-[50px] mr-16 mt-12 sm:ml-12 md:ml-0    ">
    <div className="">
        <h3 className="font-[600]">About</h3>
        <p className="mb-4 mt-7 text-[#90A3BF]">How it works</p>
        <p className="mb-4 text-[#90A3BF]">Featured</p>
        <p className="mb-4 text-[#90A3BF]">Partnership</p>
        <p className="mb-4 w-[130px] text-[#90A3BF]">Business Relation</p>
    </div>
    <div>
        <h3 className="font-[600]">Community</h3>
        <p className="mb-4 mt-7 text-[#90A3BF]">Events</p>
        <p className="mb-4 text-[#90A3BF]">Blogs</p>
        <p className="mb-4 text-[#90A3BF]">Podcast</p>
        <p className="mb-4 w-[100px] text-[#90A3BF]">Invite a friend</p>
    </div>

    <div>
        <h3 className="font-[600]">Socials</h3>
        <p className="mb-4 mt-7 text-[#90A3BF]">Discord</p>
        <p className="mb-4 text-[#90A3BF] ">Instagram</p>
        <p className="mb-4 text-[#90A3BF]">Twitter</p>
        <p className="mb-4 text-[#90A3BF]">Facebook</p>
    </div>
    
</div>


</div>




<div className="md:w-full   sm:w-[525px] border-[1px]  text-[#131313]  mt-10"></div>

<div className="flex justify-between mt-8  ">

<div className="md:ml-12 sm:ml-6 font-[500] "><p>©2022 MORENT. All rights reserved</p></div>
<div className="flex md:gap-14 sm:gap-5 md:mr-14 sm:mr-14 font-[500]">
    <p>Privacy & Policy</p><p>Terms & Condition</p>
    </div>


</div>



</div>


        </>
    )

}

export default Footer