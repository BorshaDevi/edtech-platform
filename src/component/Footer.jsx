const Footer=()=>{
    return(
        <div className='mt-10 md:ml-10 max-w-full md:pr-17  mx-auto h-auto '>
            <div className="bg-linear-to-r from-cyan-900 to-cyan-200  text-center">
              <div className="grid grid-cols-2 p-8">
                <h1 className="uppercase text-2xl font-semibold text-cyan-500">EDTech Platform</h1>
                <div className="text-start text-xl font-semibold">
                  <p><span className="text-white">Phone</span>:0180000000</p>
                  <p><span className="text-white">Email</span>:edtech@platform.com</p>
                </div>
              </div>
              <p className="text-center text-xl text-white">copyright@EdTech Platform 2025</p>
            </div>
           
        </div>
    )
}
export default Footer;