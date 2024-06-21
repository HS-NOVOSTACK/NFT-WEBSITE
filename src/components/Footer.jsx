import artLogo from '/art.svg'
import nftLogo from '/nft.svg'
import beeLogo from '/bee.svg'
import blingLogo from '/bling.svg'
import doseLogo from '/dose.svg'
import dustLogo from '/dust.svg'
import NFTZONELogo from '/NFTZONE.svg'
import koalaLogo from '/koala.svg'
import bitLogo from '/bit.svg'
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-section">

                <div className="container">

                    <div className="d-flex align-items-center justify-content-between position-relative " >
                        <div className="line" style={{ border: "2px solid rgba(63, 94, 251, 0.5)" }}></div>
                        <span className="rounded-pill pill-button"></span>
                        <span className="rounded-pill pill-button2"></span>
                        <span className="rounded-pill pill-button3"></span>
                        <span className="rounded-pill pill-button4"></span>
                        <div className="text-white top-seller-title position-absolute">
                            Top Buyers in 1 Week
                        </div>
                        <div className="lines" style={{ border: "2px solid rgba(63, 94, 251, 0.5)" }}></div>
                    </div>
                    <div className='footer-card-spacing' style={{ paddingTop: "160px" }}></div>

                    <div className="row footer-row">
                        <div className="row row-cols-5 d-flex align-items-center justify-content-center">
                            <div className="footer-card me-2 mb-3" style={{ width: "250px" }}><img src={artLogo} alt="" /></div>
                            <div className="footer-card me-2 mb-3" style={{ width: "250px" }}><img src={nftLogo} alt="" /></div>
                            <div className="footer-card me-2 mb-3" style={{ width: "250px" }}><img src={beeLogo} alt="" /></div>
                            <div className="footer-card me-2 mb-3" style={{ width: "250px" }}><img src={blingLogo} alt="" /></div>
                            <div className="footer-card me-2 mb-3" style={{ width: "250px" }}><img src={doseLogo} alt="" /></div>
                            <div className="footer-card me-2" style={{ width: "250px" }}><img src={dustLogo} alt="" /></div>
                            <div className="footer-card me-2" style={{ width: "250px" }}><img src={NFTZONELogo} alt="" /></div>
                            <div className="footer-card me-2" style={{ width: "250px" }}><img src={koalaLogo} alt="" /></div>
                            <div className="footer-card me-2" style={{ width: "250px" }}><img src={bitLogo} alt="" /></div>
                        </div>
                    </div>

                    <div className='footer-card-spacing' style={{ paddingBottom: "160px" }}></div>

                </div>

            </div>

            <div className='container-fluid position-relative mb-5'>
                <div className='container'>
                    <div className='row d-flex '>

                        <div className='col-lg-3 col-sm-6'>

                            <div className='d-flex justify-content-around footer-row-lines'>

                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "162px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "162px", top: "25%" }}></div>

                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "316px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "316px", top: "25%" }}></div>
                            </div>

                            <div className='' style={{ marginTop: "35px" }}>
                                <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Marketplace</h1>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>All NFTs</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "106px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Popular Art</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "82px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Digital Art</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "89px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Trending</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "100px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Wxplore Details</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "47px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Live Action</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "83px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>




                            </div>

                        </div>

                        <div className='col-lg-3 col-sm-6'>

                            <div className='d-flex justify-content-around footer-row-lines'>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "493px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "493px", top: "25%" }}></div>

                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "645px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "645px", top: "25%" }}></div>
                            </div>

                            <div className='' style={{ marginTop: "35px" }}>
                                <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>My Account</h1>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Profile</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "111px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>My Collection</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "59px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Create & Upload</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "36px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Account Setting</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "41px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Connect Wallet</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "44px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Wishlist</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "97px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>




                            </div>

                        </div>

                        <div className='col-lg-3 '>

                            <div className='d-flex justify-content-around footer-row-lines'>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "501px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "501px", top: "25%" }}></div>

                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "654px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "654px", top: "25%" }}></div>
                            </div>

                            <div className='' style={{ marginTop: "35px" }}>
                                <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Our Company</h1>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Recent News</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "70px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>How it Works</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "67px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>About Us</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "101px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Contact Us</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "88px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>Help Center</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "83px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center mb-3'>
                                    <div className='me-3 fs-6'>FAQ's</div>
                                    <div className='' style={{ border: "1px solid #FC466B", width: "128px", height: "0px" }}></div>
                                    <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                </div>



                            </div>

                        </div>

                        <div className='col-lg-3 '>

                            <div className='d-flex justify-content-around footer-row-lines'>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "171px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "171px", top: "25%" }}></div>

                                <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "324px", top: "100px" }}></div>
                                <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "324px", top: "25%" }}></div>
                            </div>

                            <div className='' style={{ marginTop: "35px" }}>
                                <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Subscribe to our newsletter.</h1>

                                <div className='mb-3'>
                                    <input type='search' className='form-control search rounded-pill' placeholder='Enter your email address' />
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <div className='me-2'><input type='checkbox' className='' /></div>
                                    <div className='' style={{ fontSize: "14px" }}>Please fill this form and we will notify you
                                        about the newest updates!</div>
                                </div>

                                <div className='d-flex align-items-center justify-content-between mt-3'>

                                    <div className=' footer-btn d-flex align-items-center justify-content-center'>
                                        <i class="fa-brands fa-facebook"></i>
                                    </div>
                                    <div className=' footer-btn d-flex align-items-center justify-content-center'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className=' footer-btn d-flex align-items-center justify-content-center'>
                                        <i class="fa-brands fa-youtube"></i>
                                    </div>
                                    <div className=' footer-btn d-flex align-items-center justify-content-center'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className=' footer-btn d-flex align-items-center justify-content-center'>
                                        <i class="fa-brands fa-pinterest"></i>
                                    </div>

                                </div>

                                <div className='d-flex justify-content-between mt-3'>
                                    <div className='d-flex align-items-center justify-content-center' style={{ fontSize: "14px" }}>
                                        3.4k Following
                                    </div>

                                    <div className='d-flex align-items-center justify-content-center' style={{ fontSize: "14px" }}>
                                        <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                        <div className='' style={{ width: "40px", border: "1px solid #FC466B" }}></div>
                                        <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
                                    </div>

                                    <div className='' style={{ fontSize: "14px" }}>
                                        1.2k Followers
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

export default Footer









    // <div className='container-fluid position-relative mb-5'>
    //             <div className='container'>
    //                 <div className='row d-flex footer-row-lines'>
    //                     <div className='col-lg-3 d-flex justify-content-around'>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                     </div>

    //                     <div className='col-lg-3 d-flex justify-content-around'>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                     </div>

    //                     <div className='col-lg-3 d-flex justify-content-around'>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                     </div>

    //                     <div className='col-lg-3 d-flex justify-content-around'>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                         <div className='me-2' style={{ width: "0px", height: "100px", border: "1px solid #FC466B", }}></div>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='row d-flex justify-content-between align-items-center'>

    //                 <div className='col-lg-3  '>
    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "162px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "162px", top: "112%" }}></div>

    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "316px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "316px", top: "112%" }}></div>
    //                 </div>

    //                 <div className='col-lg-3  '>
    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "493px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "493px", top: "112%" }}></div>

    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "646px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "646px", top: "112%" }}></div>
    //                 </div>

    //                 <div className='col-lg-3'>
    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "822px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "822px", top: "112%" }}></div>

    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "64.2%" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", left: "64.2%", top: "112%" }}></div>
    //                 </div>

    //                 <div className='col-lg-3'>
    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "350px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "350px", top: "112%" }}></div>

    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "249px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "249px", top: "112%" }}></div>

    //                     <div className='position-absolute footer-line' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "146px" }}></div>
    //                     <div className='position-absolute footer-line ' style={{ width: "42px", height: "2px", border: "1px solid #FC466B", right: "146px", top: "112%" }}></div>
    //                 </div>

    //             </div>
    //         </div>


    //         <div className='container ' style={{ paddingBottom: "50px" }}>
    //             <div className='row' style={{ fontSize: "23px" }}>
    //                 <div className='col-3 '>
    //                     <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Marketplace</h1>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>All NFTs</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "106px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Popular Art</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "82px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Digital Art</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "89px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Trending</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "100px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Wxplore Details</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "47px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Live Action</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "83px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>


    //                 </div>

    //                 <div className='col-3'>
    //                     <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>My Account</h1>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Profile</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "111px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>My Collection</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "59px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Create & Upload</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "36px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Account Setting</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "41px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Connect Wallet</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "44px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Wishlist</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "97px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                 </div>

    //                 <div className='col-3'>
    //                     <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Our Company</h1>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Recent News</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "70px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>How it Works</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "67px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>About Us</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "101px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Contact Us</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "88px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>Help Center</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "83px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-center mb-3'>
    //                         <div className='me-3 fs-6'>FAQ's</div>
    //                         <div className='' style={{ border: "1px solid #FC466B", width: "128px", height: "0px" }}></div>
    //                         <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                     </div>


    //                 </div>

    //                 <div className='col-3'>
    //                     <h1 className='text-center fw-bold mb-4' style={{ fontSize: "23px" }}>Subscribe to our newsletter.</h1>

    //                     <div className='mb-3'>
    //                         <input type='search' className='form-control search rounded-pill' placeholder='Enter your email address' />
    //                     </div>

    //                     <div className='d-flex justify-content-center'>
    //                         <div className='me-2'><input type='checkbox' className='' /></div>
    //                         <div className='' style={{ fontSize: "14px" }}>Please fill this form and we will notify you
    //                             about the newest updates!</div>
    //                     </div>

    //                     <div className='d-flex align-items-center justify-content-between mt-3'>

    //                         <div className=' footer-btn d-flex align-items-center justify-content-center'>
    //                             <i class="fa-brands fa-facebook"></i>
    //                         </div>
    //                         <div className=' footer-btn d-flex align-items-center justify-content-center'>
    //                             <i class="fa-brands fa-twitter"></i>
    //                         </div>
    //                         <div className=' footer-btn d-flex align-items-center justify-content-center'>
    //                             <i class="fa-brands fa-youtube"></i>
    //                         </div>
    //                         <div className=' footer-btn d-flex align-items-center justify-content-center'>
    //                             <i class="fa-brands fa-instagram"></i>
    //                         </div>
    //                         <div className=' footer-btn d-flex align-items-center justify-content-center'>
    //                             <i class="fa-brands fa-pinterest"></i>
    //                         </div>

    //                     </div>

    //                     <div className='d-flex justify-content-between mt-3'>
    //                         <div className='d-flex align-items-center justify-content-center' style={{ fontSize: "14px" }}>
    //                             3.4k Following
    //                         </div>

    //                         <div className='d-flex align-items-center justify-content-center' style={{ fontSize: "14px" }}>
    //                             <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                             <div className='' style={{ width: "40px", border: "1px solid #FC466B" }}></div>
    //                             <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: "#FC466B" }}></div>
    //                         </div>

    //                         <div className='' style={{ fontSize: "14px" }}>
    //                             1.2k Followers
    //                         </div>
    //                     </div>


    //                 </div>

    //             </div>
    //         </div> 