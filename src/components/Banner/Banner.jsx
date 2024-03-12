
const Banner = () => {
    return (
        <div className="carousel w-full rounded mt-2">


            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    {/*Overlay-1*/}
                <div className="w-full h-full  space-y-5 absolute p-24 bg-gradient-to-r from-cyan-500 to-transparent ">
                    <h1 className="text-6xl font-bold text-rose-600">FOOD COURT</h1>
                    <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Id nam atque voluptate itaque voluptatem dolor?</p>
                    
                    
                        <button className="btn mr-5">Latest Post</button>

                        <button className="btn mr-5">Get Started</button>
                    


                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />

                 {/*Overlay-2*/}
                 <div className="w-full h-full  space-y-5 absolute p-24 bg-gradient-to-r from-cyan-500 to-transparent ">
                    <h1 className="text-6xl font-bold text-green-700">GREEN GARDEN</h1>
                    <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Id nam atque voluptate itaque voluptatem dolor?</p>
                    
                    
                        <button className="btn mr-5">Latest Post</button>

                        <button className="btn mr-5">Get Started</button>
                    


                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />

                 {/*Overlay-3*/}
                 <div className="w-full h-full  space-y-5 absolute p-24 bg-gradient-to-r from-cyan-500 to-transparent ">
                    <h1 className="text-6xl font-bold text-orange-600">Safs</h1>
                    <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Id nam atque voluptate itaque voluptatem dolor?</p>
                    
                    
                        <button className="btn mr-5">Latest Post</button>

                        <button className="btn mr-5">Get Started</button>
                    


                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />

             {/*Overlay-4*/}
             <div className="w-full h-full  space-y-5 absolute p-24 bg-gradient-to-r from-cyan-500 to-transparent ">
                    <h1 className="text-6xl font-bold text-lime-400">KiOSK</h1>
                    <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Id nam atque voluptate itaque voluptatem dolor?</p>
                    
                    
                        <button className="btn mr-5">Latest Post</button>

                        <button className="btn mr-5">Get Started</button>
                    


                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;