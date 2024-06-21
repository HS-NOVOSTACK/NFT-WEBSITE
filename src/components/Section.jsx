import React from 'react';
import 'animate.css/animate.min.css';


const Section = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className=" section-page">

                        <div className="row section-row">
                            <div className="col-lg-7">

                                <div className="position-relative section-content">
                                    <div className=" section-icon d-flex">

                                        <div className="me-3 "> <a href=""><img width="25" height="25" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" /></a></div>

                                        <div>|</div>

                                        <div className="ms-3"> <a href=""><img width="25" height="25" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1" /></a></div>
                                    </div>
                                </div>

                                <div className="section-title d-flex align-items-center mt-5">
                                    <div className="flex-1">
                                        <div className="overflow-hidden">
                                            <div className="">
                                                <div className="section-text section-main-text">
                                                    <div className="fw-bold best">The Best Beneficial Place</div>
                                                    <div className="d-flex">
                                                        <div className="fw-bold">to Collect,</div>
                                                        <div className="d-flex" style={{ color: "rgb(252 70 89)" }}>
                                                            <span className="fw-bold animate__animated animate__fadeInDown ">&nbsp; Buy and Sell</span>
                                                        </div>
                                                        {/* <div className="d-flex " style={{color: "rgb(252 70 89)"}}> <span className="fw-bold"> &nbsp; Buy and Sell</span></div> */}
                                                    </div>
                                                    <div className="">
                                                    <span className="fw-bold animate__animated animate__flipInX " style={{ color: "rgb(252, 70, 89)" }}>NFT</span>


                                                        {/* <span className="fw-bold " style={{ color: "rgb(252 70 89)" }}>NFT</span>  */}
                                                        <span className="fw-bold">Marketplace</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center section-btn">
                                    <button className="explore-btn border-0 text-white rounded-pill mt-5 me-3">Explore</button>
                                    <button className="create-btn border-0 text-white rounded-pill mt-5 me-3">Create</button>
                                    <p className="mt-5 section-pehra" style={{ paddingTop: "20px" }}>Secure and secret NFTs for gaming, entertainment metaverse<br></br> and data management time capsules.</p>
                                </div>

                            </div>

                            <div className="col-lg-5 d-flex justify-content-center align-items-center">
                                <div className="card section-card section-main-card position-relative" style={{ width: '21rem', height: "32rem" }}>

                                    <button className="rounded-pill position-absolute like-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />5.3K</button>

                                    <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_24.jpeg" className="card-img-top" alt="..." />

                                    <button className="rounded-pill position-absolute card-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_13.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "22px" }}>Johny E.</span></button>

                                    <div className="card-body">
                                        <h5 className="card-title section-card-title text-white fw-bold mb-3 mt-4">Diamond animals</h5>

                                        <p className="card-text text-light mb-3 fs-5"><span style={{ opacity: '0.8' }}>Current Bid :
                                        </span> <span>0.27 ETH 7/21</span></p>

                                        <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                        <div className="d-flex justify-content-between">
                                            <a href="#" className="btn text-white "><i class="fa-solid fa-rotate-right me-2" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '18px' }}>View History</span></a>
                                            <a href="#" className="text-decoration-none text-white rounded-pill card-section-btn">Place Bid</a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Section

