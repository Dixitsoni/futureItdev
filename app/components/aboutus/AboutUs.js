import React from 'react'

function AboutUs() {
    return (
        <section id="about" class="about">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>About Us</h2>
                </div>
                <div class="row content">
                    <div class="col-lg-12">
                        <p>
                            <strong>Welcome to BRIGHT FUTURE & IT SOLUTIONS</strong>
                        </p>
                        <p>
                            At BRIGHT FUTURE & IT SOLUTIONS, we turn complex technology challenges into growth opportunities for your business. Our mission is to provide top-tier IT services that empower companies to harness the full potential of technology.
                        </p>
                        <ul>
                            <li><i class="ri-check-double-line"></i>We Develop Custom Software ( Website , mobile Application and TV Application)</li>
                            <li><i class="ri-check-double-line"></i>Our team’s diverse skills and collaborative spirit enable us to tackle complex challenges and deliver exceptional results. We thrive on teamwork and creative solutions, working together to ensure our clients receive the best possible service.</li>
                            <li className='text-center pt-5'><em>" creative problem-solving is key to cross the boundary of any possibilities "</em></li>
                        </ul>
                    </div>
                    {/* <div class="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            Our team and Our Clients is our greatest asset
                        </p>
                        <a href="#" class="btn-learn-more">Learn More</a>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default AboutUs