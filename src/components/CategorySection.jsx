const CategorySection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center category-section-header">
                        <div className="">
                            <div className="section-icon d-flex">

                                <div className="me-3 "> <a href=""><img width="25" height="25" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" /></a></div>

                                <div>|</div>

                                <div className="ms-3"> <a href=""><img width="25" height="25" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1" /></a></div>
                            </div>
                        </div>

                        <div className="category-hr" style={{ width: "200px" }}><hr  style={{ border: "1px solid #3F5EFB" }}></hr></div>

                        <div className="category-title">
                            Explore by Category
                        </div>

                        <div className="category-hr" style={{ width: "200px" }}><hr  style={{ border: "1px solid #3F5EFB" }}></hr></div>

                        <div className="d-flex category-header-circle">
                            <span className="rounded-pill category-pill-button me-2"></span>
                            <span className="rounded-circle category-circle-button me-2"></span>
                            <span className="rounded-circle category-circle-button me-2"></span>
                            <span className="rounded-circle category-circle-button me-2"></span>
                            <span className="rounded-circle category-circle-button me-2"></span>
                        </div>

                    </div>

                    <div className="" style={{ paddingTop: "100px" }}></div>

                    <div className="row d-flex justify-content-evenly category-row">
                        <div className="row row-cols-5">

                            <div className="col ">
                                <div className="card category-card mb-3" style={{ width: '15rem', height: "15rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                                        <h5 className="card-title  d-flex align-items-center justify-content-center rounded-circle" style={{ border: "4px solid #3f5efb" , marginTop:"10px" }}> <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_38.png" alt="" />
                                        </h5>

                                        <p className="card-text text-white text-center mt-4 art ">ART</p>
                                        <p className="card-text text-white text-center veniam">Exercitation veniam</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card category-card mb-3" style={{ width: '15rem', height: "15rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                                        <h5 className="card-title  d-flex align-items-center justify-content-center rounded-circle" style={{ border: "4px solid #3f5efb" , marginTop:"10px" }}> <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_39.png" alt="" />
                                        </h5>

                                        <p className="card-text text-white text-center mt-4 art "> MUSIC</p>
                                        <p className="card-text text-white text-center veniam">Exercitation veniam</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card category-card mb-3" style={{ width: '15rem', height: "15rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                                        <h5 className="card-title  d-flex align-items-center justify-content-center rounded-circle" style={{ border: "4px solid #3f5efb" , marginTop:"10px" }}> <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_40.png" alt="" />
                                        </h5>

                                        <p className="card-text text-white text-center mt-4 art ">VIDEO</p>
                                        <p className="card-text text-white text-center veniam">Exercitation veniam</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card category-card mb-3" style={{ width: '15rem', height: "15rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                                        <h5 className="card-title  d-flex align-items-center justify-content-center rounded-circle" style={{ border: "4px solid #3f5efb",marginTop:"10px" }}> <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_41.png" alt="" />
                                        </h5>

                                        <p className="card-text text-white text-center mt-4 art ">FASHION</p>
                                        <p className="card-text text-white text-center veniam">Exercitation veniam</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card category-card mb-3" style={{ width: '15rem', height: "15rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                                        <h5 className="card-title  d-flex align-items-center justify-content-center rounded-circle" style={{ border: "4px solid #3f5efb" ,marginTop:"10px" }}> <img src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_42.png" alt="" />
                                        </h5>

                                        <p className="card-text text-white text-center mt-4 art ">SPORTS</p>
                                        <p className="card-text text-white text-center veniam">Exercitation veniam</p>

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

export default CategorySection