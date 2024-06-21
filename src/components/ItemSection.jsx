const ItemSection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="new-items-section">
                        <div className="d-flex justify-content-between align-items-center new-items-main-div">

                            <div className="">
                                <h1 className="text-dark item-heading">New Items</h1>
                            </div>

                            <div className="btn-group border rounded-pill btn-list new-items-btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn text-white border-0 nft-btn rounded-pill">All NFT</button>
                                <button type="button" className="btn text-white border-0 rounded-pill item-btn">Fashion</button>
                                <button type="button" className="btn text-white border-0 rounded-pill item-btn">Music</button>
                                <button type="button" className="btn text-white border-0 rounded-pill item-btn">Video</button>
                                <button type="button" className="btn text-white border-0 rounded-pill item-btn">Games</button>
                            </div>

                            <div className="">
                                <button className="btn btn-primary text-white border-0 rounded-pill view-btn">View All</button>
                            </div>

                        </div>

                        <div className="" style={{ paddingTop: "100px" }}></div>

                        <div className="row mb-4 d-flex justify-content-around new-items-row-1">
                            <div className="row row-cols-5 ">

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />5.3K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/1.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_13.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Johny E.</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Cool octopus travel</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.24 ETH 4/17</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />3.1K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/2.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_12.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Debit Alex</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Octopus eating ice</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.09 ETH 1/9</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />2.1K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/3.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_11.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Robert Alex</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Panda with fish</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.19 ETH 5/11</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />1.2K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/4.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_10.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Austin R.</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Kawaii bubble tea</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.29 ETH 11/19</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />1.1K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_19.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_9.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Robert</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Cute monsters hallo</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.19 ETH 7/13</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        
                        <div className="row mb-4 d-flex justify-content-around new-items-row-2">
                            <div className="row row-cols-5 ">

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />2.2K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_20.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_8.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Gallant J.</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Cat mascot charing</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.28 ETH 21/91</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />1.4K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_21.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_7.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Austin R</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Small kids orange</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.17 ETH 14/23</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />1.9K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_23.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_15.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Gustin D.</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Digital Cat Painting</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.17 ETH 14/23</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />9.3K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_24.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_16.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Vustin H..</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Fictional character</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.06 ETH 11/109</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            
                                <div className="col">
                                    <div className="card section-card position-relative" style={{ width: '15rem', height: "24rem" }}>

                                        <button className="rounded-pill position-absolute like-item-btn "> <img width={15} height={15} src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" className="me-1" />5.3K</button>

                                        <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_25.jpeg" className="card-img-top" alt="..." />

                                        <button className="rounded-pill position-absolute card-item-img-btn d-flex align-items-center bg-white border-0"><img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_17.png" alt="" className="me-2" /><span style={{ color: 'rgb(17,13,46,1)', fontSize: "11px" }}>Bustin W.</span></button>

                                        <div className="card-body">
                                            <h5 className="card-title section-card-item-title text-white fw-bold mb-3 mt-4">Diamond animals</h5>

                                            <p className="card-item-text text-light mb-3 "><span style={{ opacity: '0.8' }}>Current Bid :
                                            </span> <span>0.27 ETH 7/21</span></p>

                                            <hr className="text-light" style={{ borderColor: '#3F5EFB' }}></hr>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-decoration-none text-white "><i class="fa-solid fa-rotate-right rotate-icon me-1" style={{ color: 'white' }}></i><span className="fw-bold" style={{ fontSize: '11px' }}>View History</span></a>
                                                <a href="#" className="text-decoration-none bg-primary text-white rounded-pill card-item-btn">Place Bid</a>
                                            </div>

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

export default ItemSection