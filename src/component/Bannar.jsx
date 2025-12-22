const Bannar=()=>{
    return(
        <div className="mt-10 md:ml-10">
           <div 
           className="bg-[url('https://res.cloudinary.com/dg1okcxsx/image/upload/v1766245777/freepik__adjust__53457_dlv4es.jpg')] 
           h-screen  bg-cover bg-center bg-fixed">
            <div className="flex  w-full h-full ">
                <div className="mt-28 ml-10 space-y-6">
                <h1 className="text-white font-bold text-4xl uppercase"><span className=" text-cyan-400">EDTech Platform for</span> <br></br> <span className="text-cyan-500">Your Future</span></h1>
                <p className="text-white text-xl">Discover a wide range of carefully designed <br></br> courses that help you gain real-world skills,
                 <br></br>improve your knowledge, and achieve your <br></br>  academic and career goals with confidence.</p>
               <button  className="text-white font-bold text-xl rounded-lg border-black bg-linear-to-r from-cyan-500 to-blue-500 p-3">Get Started</button>
            </div>
            </div>
           </div>
        </div>
    )
}
export default Bannar;