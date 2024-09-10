import React from 'react'

function PortfolioSection() {
    return (
        <section id="portfolio" className="portfolio" style={{ color: '#858383', backgroundColor: 'black' }}>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2 style={{ color: 'white' }}>Portfolio</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>
                {/* <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-eduction">Education</li>
                    <li data-filter=".filter-card-automobile">Automobile</li>
                    <li data-filter=".filter-web-healthcare">Healthcare</li>
                    <li data-filter=".filter-web-fitness">Fitness</li>
                    <li data-filter=".filter-web-commerce">E-Commerce</li>
                    <li data-filter=".filter-web-entertainment">Entertainment</li>
                    <li data-filter=".filter-web-business">Business Websites</li>
                </ul> */}
                <div className="row portfolio-container pt-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img width={'100%'} src={'assets/img/Screenshot 2024-09-09 11:17:17.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Music App</h4>
                            <p className='pr-5'>Mobile Application & web based Application</p>
                            {/* <a href="assets/img/Screenshot 2024-09-09 11:17:17.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-eduction">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 11:18:08.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>E-commerce App</h4>
                            <p>Web app & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card-automobile">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 11:18:41.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>New Collections E-commerce</h4>
                            <p>Web App & mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web-healthcare">
                        <div className="portfolio-img"><img width={'100%'} src={'assets/img/Screenshot 2024-09-09 12:10:50.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Education</h4>
                            <p>Web App & mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web-fitness">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:12:30.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Grocery Store</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web-commerce">
                        <div className="portfolio-img"><img width={'100%'} src={'assets/img/Screenshot 2024-09-09 12:22:31.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Kids Sales Store</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web-entertainment">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:22:58.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Kids E-commerce</h4>
                            <p>Web App & mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web-business">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:31:00.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Video & live Streaming</h4>
                            <p>Web Application</p>
                            {/* <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 18:00:06.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>E-learning Platform & Live Conference</h4>
                            <p>Web Application</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 17:28:15.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Admin Panel for Test Series App</h4>
                            <p>Web App & Moblie App</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:40:30.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Big Sales Offer Website</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:36:20.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Movie App</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:40:47.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Category Product Collection</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={'assets/img/Screenshot 2024-09-09 12:45:02.png'} className="img-fluid" alt="" /></div>
                        <div className="my-3">
                            <h4>Recruitment Website</h4>
                            <p>Web App & Mobile App</p>
                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i style={{ fontSize: 30 }} className="bx bx-plus text-white"></i></a>
                            <a href="/page/portfoliodetail" className="details-link" title="More Details"><i style={{ fontSize: 30 }} className="bx bx-link text-white"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection