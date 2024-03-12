import art from '../../../../assets/art.jpg'
import books from '../../../../assets/books.jpg'
import stationary from '../../../../assets/stationary.png'
import food from '../../../../assets/food.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const ShopByCategory = () => {

    const settings = {
        dots: true,
        // arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='bg-lime-600 p-4'>
            <h1 className="text-center my-2 text-3xl font-bold">Shop by category</h1>

            <p className="text-center my-2 text-xl ">Pick the catogory you are looking for and start shopping now!</p>


                <div className=' w-4/5 mx-auto  m-4 slider-container '>
                    <Slider {...settings}>
                        
                        
                        {/*1*/}
                        <div >
                            <div className="card w-[370px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={art} alt="Shoes" className="rounded-xl h-[200px] " />
                                </figure>
                                <div className="card-body items-center text-center">
                                    
                                    <div className="card-actions">
                                        <button className="btn btn-warning">Art & Craft</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*2*/}
                        <div >
                            <div className="card w-[370px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={books} alt="Shoes" className="rounded-xl h-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    
                                    <div className="card-actions">
                                        <button className="btn btn-warning">Books</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*3*/}
                        <div >
                            <div className="card w-[370px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={food} alt="Shoes" className="rounded-xl h-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    
                                    <div className="card-actions">
                                        <button className="btn btn-warning">Foods</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*4*/}
                        <div >
                            <div className="card w-[370px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={stationary} alt="Shoes" className="rounded-xl h-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    
                                    <div className="card-actions">
                                        <button className="btn btn-warning">Stationary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                        
                        
                    </Slider>
                </div>

        </div>
    );
};

export default ShopByCategory;