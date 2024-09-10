import React from 'react'

function SkillSection() {
    return (
        <section id="skills" class="skills">
            <div class="container" data-aos="fade-up">
                <div class="">
                    <div className='text-center'>
                        <h2 style={{ color: '#3566bf' }}>
                            We build Projects using Below Tech-Stack and Tools
                        </h2>
                    </div>
                    <div style={{ backgroundColor: '#37517e', borderRadius: '20px', color: "wheat",boxShadow:'0px 0px 20px grey' }} className='row text-center mt-5 pt-5'>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/images (1).png' alt='' />
                            <h3 className='mt-2'>HTML</h3>
                        </div>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/CSS3_logo_and_wordmark.svg' alt='' />
                            <h3 className='mt-2'>CSS</h3>
                        </div>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/JavaScript-logo.png' alt='' />
                            <h3 className='mt-2'>Javascript</h3>
                        </div>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/images.png' alt='' />
                            <h3 className='mt-2'>React</h3>
                        </div>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/images (2).png' alt='' />
                            <h3 className='mt-2'>Nextjs</h3>
                        </div>
                        <div className='col-lg-2'>
                            <img width={80} height={75} src='assets/img/16445995.png' alt='' />
                            <h3 className='mt-2'>Vuejs</h3>
                        </div>
                        <div style={{ backgroundColor: '#37517e', borderRadius: '20px', color: "wheat" }} className='col-lg-12 p-5 d-flex justify-content-around items-center mt-5'>
                            <img width={'20%'} height={'auto'} src='assets/img/Screen-Shot-2018-11-19-at-8.43.27-PM.png' alt='' />
                            <h1 className='mt-5 fs-1 text-light'>UI / UX Designs</h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SkillSection