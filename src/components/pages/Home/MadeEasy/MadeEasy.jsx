import freefast from '../../../../assets/freefast.png'
import payment from '../../../../assets/payment.jpg'
import clickcollect from '../../../../assets/clickcollect.png'
const MadeEasy = () => {
    return (
        <div className="m-6">
            <h1 className="text-center mb-2 text-3xl font-bold">Shopping made easy!</h1>

            <p className="text-center text-xl ">Now shop at our store with complete convenience</p>


            <div className="grid grid-cols-3 mt-4 w-4/5 mx-auto gap-6">
                {/*click & collect*/}
                <div className="card w-80 bg-cyan-100 shadow-[0_0_40px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_2px_1px_green]">
                    <figure><img className="w-56 h-52 " src={clickcollect} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Click and collect</h2>
                        <p>Order products from our website/app and collect them within hours</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                          </div> */}
                    </div>
                </div>
                {/*free & fast*/}
                <div className="card w-80 bg-cyan-100 shadow-[0_0_40px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_2px_1px_green]">
                    <figure><img className="w-56 h-52 " src={freefast} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Free and Fast delivery</h2>
                        <p>Applies to DIU and Neighboring areas</p>

                    </div>
                </div>

                {/*Different payment*/}
                <div className="card w-80 bg-cyan-100 shadow-[0_0_40px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_2px_1px_green]">
                    <figure><img className="w-56 h-52 " src={payment} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Different payment options</h2>
                        <p>We are accepting payment through COD,mobile banking, card or bank transfer</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default MadeEasy;